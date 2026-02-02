# Flutter UI Best Practices

hooks_riverpod + カスタムデザインシステムでの実装ベストプラクティス。

---

## アーキテクチャ

### Feature-First構造

```
lib/
├── core/
│   ├── theme/
│   │   ├── app_theme.dart
│   │   ├── app_colors.dart
│   │   ├── app_typography.dart
│   │   └── app_spacing.dart
│   ├── widgets/
│   │   ├── buttons/
│   │   ├── inputs/
│   │   └── cards/
│   └── utils/
├── features/
│   ├── auth/
│   │   ├── presentation/
│   │   │   ├── screens/
│   │   │   ├── widgets/
│   │   │   └── providers/
│   │   ├── domain/
│   │   └── data/
│   ├── home/
│   └── profile/
└── main.dart
```

---

## デザインシステム

### カラー定義

```dart
// lib/core/theme/app_colors.dart
abstract class AppColors {
  // Primary
  static const primary = Color(0xFF1A1A2E);
  static const primaryLight = Color(0xFF2D2D44);
  static const primaryDark = Color(0xFF0F0F1A);
  
  // Accent
  static const accent = Color(0xFFE94560);
  static const accentLight = Color(0xFFFF6B6B);
  
  // Neutral
  static const background = Color(0xFFFAFAFC);
  static const surface = Color(0xFFFFFFFF);
  static const textPrimary = Color(0xFF1A1A2E);
  static const textSecondary = Color(0xFF6B7280);
  static const border = Color(0xFFE5E7EB);
  
  // Semantic
  static const success = Color(0xFF10B981);
  static const warning = Color(0xFFF59E0B);
  static const error = Color(0xFFEF4444);
}
```

### スペーシング定義

```dart
// lib/core/theme/app_spacing.dart
abstract class AppSpacing {
  static const double xs = 4;
  static const double sm = 8;
  static const double md = 16;
  static const double lg = 24;
  static const double xl = 32;
  static const double xxl = 48;
  
  // Padding helpers
  static const allXs = EdgeInsets.all(xs);
  static const allSm = EdgeInsets.all(sm);
  static const allMd = EdgeInsets.all(md);
  static const allLg = EdgeInsets.all(lg);
  
  // Horizontal
  static const horizontalMd = EdgeInsets.symmetric(horizontal: md);
  static const horizontalLg = EdgeInsets.symmetric(horizontal: lg);
  
  // Screen padding
  static const screenPadding = EdgeInsets.symmetric(horizontal: 20);
}
```

### タイポグラフィ定義

```dart
// lib/core/theme/app_typography.dart
abstract class AppTypography {
  static const _fontFamily = 'DM Sans';  // or your chosen font
  
  // Display
  static const displayLarge = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 32,
    fontWeight: FontWeight.w700,
    height: 1.2,
    letterSpacing: -0.5,
  );
  
  // Headings
  static const h1 = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 24,
    fontWeight: FontWeight.w600,
    height: 1.3,
  );
  
  static const h2 = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 20,
    fontWeight: FontWeight.w600,
    height: 1.3,
  );
  
  static const h3 = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 18,
    fontWeight: FontWeight.w500,
    height: 1.4,
  );
  
  // Body
  static const bodyLarge = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 16,
    fontWeight: FontWeight.w400,
    height: 1.5,
  );
  
  static const bodyMedium = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 14,
    fontWeight: FontWeight.w400,
    height: 1.5,
  );
  
  static const bodySmall = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 12,
    fontWeight: FontWeight.w400,
    height: 1.4,
  );
  
  // Label
  static const labelLarge = TextStyle(
    fontFamily: _fontFamily,
    fontSize: 14,
    fontWeight: FontWeight.w500,
    height: 1.4,
    letterSpacing: 0.1,
  );
}
```

### 角丸定義

```dart
// lib/core/theme/app_radius.dart
abstract class AppRadius {
  static const double xs = 4;
  static const double sm = 8;
  static const double md = 12;
  static const double lg = 16;
  static const double xl = 24;
  static const double full = 999;
  
  static const borderRadiusSm = BorderRadius.all(Radius.circular(sm));
  static const borderRadiusMd = BorderRadius.all(Radius.circular(md));
  static const borderRadiusLg = BorderRadius.all(Radius.circular(lg));
}
```

---

## hooks_riverpod パターン

### Provider定義

```dart
// lib/features/home/presentation/providers/home_provider.dart
@riverpod
class HomeController extends _$HomeController {
  @override
  FutureOr<HomeState> build() async {
    return const HomeState.initial();
  }
  
  Future<void> loadData() async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      final data = await ref.read(homeRepositoryProvider).fetchData();
      return HomeState.loaded(data);
    });
  }
}
```

### Screen with Hooks

```dart
// lib/features/home/presentation/screens/home_screen.dart
class HomeScreen extends HookConsumerWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final scrollController = useScrollController();
    final animationController = useAnimationController(
      duration: const Duration(milliseconds: 300),
    );
    
    final homeState = ref.watch(homeControllerProvider);
    
    return Scaffold(
      body: homeState.when(
        data: (state) => _buildContent(state, scrollController),
        loading: () => const LoadingIndicator(),
        error: (e, st) => ErrorView(error: e),
      ),
    );
  }
}
```

---

## カスタムウィジェット

### ボタン

```dart
// lib/core/widgets/buttons/app_button.dart
enum AppButtonVariant { primary, secondary, ghost }
enum AppButtonSize { sm, md, lg }

class AppButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final AppButtonVariant variant;
  final AppButtonSize size;
  final Widget? icon;
  final bool isLoading;

  const AppButton({
    super.key,
    required this.label,
    this.onPressed,
    this.variant = AppButtonVariant.primary,
    this.size = AppButtonSize.md,
    this.icon,
    this.isLoading = false,
  });

  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 150),
      child: Material(
        color: _backgroundColor,
        borderRadius: AppRadius.borderRadiusMd,
        child: InkWell(
          onTap: isLoading ? null : onPressed,
          borderRadius: AppRadius.borderRadiusMd,
          child: Container(
            padding: _padding,
            child: Row(
              mainAxisSize: MainAxisSize.min,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (isLoading)
                  _buildLoadingIndicator()
                else ...[
                  if (icon != null) ...[icon!, const SizedBox(width: 8)],
                  Text(label, style: _textStyle),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }
  
  // ... style getters
}
```

---

## アニメーション

### 基本パターン

```dart
// Fade + Slide入場アニメーション
class FadeSlideAnimation extends HookWidget {
  final Widget child;
  final Duration delay;

  const FadeSlideAnimation({
    super.key,
    required this.child,
    this.delay = Duration.zero,
  });

  @override
  Widget build(BuildContext context) {
    final controller = useAnimationController(
      duration: const Duration(milliseconds: 400),
    );
    
    useEffect(() {
      Future.delayed(delay, () => controller.forward());
      return null;
    }, []);

    final fadeAnimation = useAnimation(
      CurvedAnimation(parent: controller, curve: Curves.easeOut),
    );
    
    final slideAnimation = useAnimation(
      Tween<Offset>(
        begin: const Offset(0, 0.1),
        end: Offset.zero,
      ).animate(CurvedAnimation(parent: controller, curve: Curves.easeOut)),
    );

    return FadeTransition(
      opacity: controller,
      child: SlideTransition(
        position: slideAnimation as Animation<Offset>,
        child: child,
      ),
    );
  }
}
```

### Haptic Feedback

```dart
// タップ時の触覚フィードバック
Future<void> onTapWithFeedback(VoidCallback action) async {
  await HapticFeedback.lightImpact();
  action();
}

// 成功時
await HapticFeedback.mediumImpact();

// エラー時
await HapticFeedback.heavyImpact();
```

---

## パフォーマンス

### リスト最適化

```dart
// ❌ 避ける
ListView(
  children: items.map((item) => ItemWidget(item: item)).toList(),
)

// ✅ 推奨
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) => ItemWidget(
    key: ValueKey(items[index].id),
    item: items[index],
  ),
)
```

### 画像最適化

```dart
// キャッシュ付き画像
CachedNetworkImage(
  imageUrl: url,
  placeholder: (context, url) => const ShimmerPlaceholder(),
  errorWidget: (context, url, error) => const Icon(Icons.error),
  memCacheWidth: 300,  // メモリキャッシュサイズ制限
)
```

### const活用

```dart
// ❌ 毎回再構築
Container(
  padding: EdgeInsets.all(16),
  decoration: BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.circular(12),
  ),
)

// ✅ const化
Container(
  padding: const EdgeInsets.all(16),
  decoration: const BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.all(Radius.circular(12)),
  ),
)
```

---

## アクセシビリティ

```dart
// セマンティクスの追加
Semantics(
  label: 'プロフィール画像',
  button: true,
  child: GestureDetector(
    onTap: onTap,
    child: CircleAvatar(/* ... */),
  ),
)

// 十分なタップ領域
SizedBox(
  width: 48, // 最小44pt推奨
  height: 48,
  child: IconButton(/* ... */),
)

// コントラスト確保
// 通常テキスト: 4.5:1以上
// 大きいテキスト: 3:1以上
```
