# UI Styles Catalog for Flutter

67種類のUIスタイルをFlutter実装例付きで解説。プロジェクトに最適なスタイルを選択する際の参考に。

---

## 使い方

1. **業種・用途からスタイルを選ぶ** → Best Forを参照
2. **キーワードで雰囲気を確認** → Keywords参照
3. **Flutter実装のポイントを確認** → Implementation参照
4. **避けるべきパターンを確認** → Avoid参照

---

## モバイルアプリに最適なスタイル（TOP 15）

### 1. Minimalism & Swiss Style
- **Best For:** 生産性アプリ、ビジネスツール、ダッシュボード
- **Keywords:** クリーン、機能的、タイポグラフィ重視、グリッドベース
- **Flutter実装:**
```dart
ThemeData(
  colorScheme: ColorScheme.light(
    primary: Color(0xFF000000),
    surface: Color(0xFFFFFFFF),
  ),
  textTheme: GoogleFonts.interTextTheme(),
  cardTheme: CardTheme(
    elevation: 0,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(0)),
  ),
)
```
- **Avoid:** 装飾的な要素、グラデーション、過剰なアニメーション

---

### 2. Soft UI / Neumorphism
- **Best For:** 健康・ウェルネス、瞑想アプリ、スマートホーム
- **Keywords:** 柔らかい影、凹凸感、優しい、プレミアム
- **Flutter実装:**
```dart
Container(
  decoration: BoxDecoration(
    color: Color(0xFFE0E5EC),
    borderRadius: BorderRadius.circular(20),
    boxShadow: [
      BoxShadow(
        color: Colors.white,
        offset: Offset(-6, -6),
        blurRadius: 12,
      ),
      BoxShadow(
        color: Color(0xFFA3B1C6),
        offset: Offset(6, 6),
        blurRadius: 12,
      ),
    ],
  ),
)
```
- **Avoid:** 高コントラスト、鮮やかな色、フラットデザイン

---

### 3. Glassmorphism
- **Best For:** フィンテック、モダンSaaS、天気アプリ、音楽プレイヤー
- **Keywords:** 透明感、ブラー、レイヤー感、未来的
- **Flutter実装:**
```dart
ClipRRect(
  borderRadius: BorderRadius.circular(16),
  child: BackdropFilter(
    filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
    child: Container(
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.2),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withOpacity(0.3)),
      ),
    ),
  ),
)
```
- **Avoid:** 背景がシンプルすぎる場合（効果が見えない）、過度な使用

---

### 4. Neubrutalism
- **Best For:** Gen Zブランド、クリエイティブアプリ、スタートアップ
- **Keywords:** 太い枠線、ハードシャドウ、ポップ、大胆
- **Flutter実装:**
```dart
Container(
  decoration: BoxDecoration(
    color: Color(0xFFFFE500), // 鮮やかな黄色
    border: Border.all(color: Colors.black, width: 3),
    borderRadius: BorderRadius.circular(8),
    boxShadow: [
      BoxShadow(
        color: Colors.black,
        offset: Offset(4, 4),
        blurRadius: 0, // ハードシャドウ
      ),
    ],
  ),
)
```
- **Avoid:** 淡い色、繊細なデザイン、企業向けアプリ

---

### 5. Bento Grid
- **Best For:** ダッシュボード、ポートフォリオ、プロフィール画面
- **Keywords:** グリッド、カード、情報密度、Apple風
- **Flutter実装:**
```dart
GridView.count(
  crossAxisCount: 2,
  mainAxisSpacing: 16,
  crossAxisSpacing: 16,
  children: [
    BentoCard(size: BentoSize.large),  // 2x2
    BentoCard(size: BentoSize.small),  // 1x1
    BentoCard(size: BentoSize.small),  // 1x1
    BentoCard(size: BentoSize.wide),   // 2x1
  ],
)
```
- **Avoid:** 均一なグリッド、情報過多

---

### 6. Dark Mode (OLED)
- **Best For:** ナイトモード、動画アプリ、開発ツール、ゲーム
- **Keywords:** 真っ黒背景、省電力、没入感、コントラスト
- **Flutter実装:**
```dart
ThemeData.dark().copyWith(
  scaffoldBackgroundColor: Color(0xFF000000), // Pure black for OLED
  colorScheme: ColorScheme.dark(
    surface: Color(0xFF121212),
    primary: Color(0xFFBB86FC),
  ),
  cardColor: Color(0xFF1E1E1E),
)
```
- **Avoid:** グレー背景（OLED効果減）、低コントラストテキスト

---

### 7. Claymorphism
- **Best For:** 教育アプリ、子供向け、カジュアルゲーム
- **Keywords:** 3D風、粘土感、柔らかい、可愛い
- **Flutter実装:**
```dart
Container(
  decoration: BoxDecoration(
    color: Color(0xFFF0F0F3),
    borderRadius: BorderRadius.circular(24),
    boxShadow: [
      BoxShadow(
        color: Color(0xFFFFFFFF),
        offset: Offset(-3, -3),
        blurRadius: 6,
      ),
      BoxShadow(
        color: Color(0xFFD1D9E6),
        offset: Offset(3, 3),
        blurRadius: 6,
      ),
    ],
    border: Border.all(
      color: Color(0xFFFFFFFF).withOpacity(0.5),
      width: 2,
    ),
  ),
)
```
- **Avoid:** シリアスなアプリ、金融系

---

### 8. AI-Native UI
- **Best For:** AIアシスタント、チャットボット、Copilot系
- **Keywords:** 会話型、動的、パルスアニメーション、グラデーション
- **Flutter実装:**
```dart
// AIの思考中を表すパルスアニメーション
AnimatedContainer(
  duration: Duration(milliseconds: 1500),
  decoration: BoxDecoration(
    gradient: LinearGradient(
      colors: [Color(0xFF667EEA), Color(0xFF764BA2)],
    ),
    borderRadius: BorderRadius.circular(20),
    boxShadow: [
      BoxShadow(
        color: Color(0xFF667EEA).withOpacity(0.5),
        blurRadius: isThinking ? 20 : 8,
        spreadRadius: isThinking ? 2 : 0,
      ),
    ],
  ),
)
```
- **Avoid:** 静的すぎるUI、古臭いチャットUI

---

### 9. Organic / Biophilic
- **Best For:** ウェルネス、サステナビリティ、自然食品
- **Keywords:** 自然、曲線、アースカラー、落ち着き
- **Flutter実装:**
```dart
ThemeData(
  colorScheme: ColorScheme.light(
    primary: Color(0xFF2D5A3D),    // 深緑
    secondary: Color(0xFFD4A373),  // ベージュ
    surface: Color(0xFFF5F5DC),    // 生成り
  ),
  textTheme: GoogleFonts.loraTextTheme(),
  cardTheme: CardTheme(
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(24), // 大きめの角丸
    ),
  ),
)
```
- **Avoid:** 鋭角、ネオンカラー、人工的な印象

---

### 10. Micro-interactions Focus
- **Best For:** SNS、ゲーミフィケーション、エンゲージメント重視
- **Keywords:** アニメーション、フィードバック、楽しい、レスポンシブ
- **Flutter実装:**
```dart
// いいねボタンのマイクロインタラクション
GestureDetector(
  onTap: () async {
    await HapticFeedback.mediumImpact();
    _controller.forward().then((_) => _controller.reverse());
  },
  child: ScaleTransition(
    scale: Tween(begin: 1.0, end: 1.3).animate(_controller),
    child: Icon(Icons.favorite, color: isLiked ? Colors.red : Colors.grey),
  ),
)
```
- **Avoid:** アニメーションなしのタップ、フィードバックの欠如

---

### 11. E-commerce Luxury
- **Best For:** 高級ブランド、ファッション、ジュエリー
- **Keywords:** エレガント、余白多め、セリフ体、ゴールドアクセント
- **Flutter実装:**
```dart
ThemeData(
  colorScheme: ColorScheme.light(
    primary: Color(0xFF1A1A1A),
    secondary: Color(0xFFD4AF37), // Gold
    surface: Color(0xFFFAFAFA),
  ),
  textTheme: GoogleFonts.cormorantGaramondTextTheme(),
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      padding: EdgeInsets.symmetric(horizontal: 48, vertical: 20),
      textStyle: TextStyle(letterSpacing: 2),
    ),
  ),
)
```
- **Avoid:** ポップな色、カジュアルなフォント、詰め込みすぎ

---

### 12. Fintech / Banking
- **Best For:** 銀行、決済、投資、保険
- **Keywords:** 信頼感、セキュア、プロフェッショナル、データ可視化
- **Flutter実装:**
```dart
ThemeData(
  colorScheme: ColorScheme.light(
    primary: Color(0xFF0A2463),    // ダークブルー
    secondary: Color(0xFF3E92CC),  // アクセントブルー
    surface: Color(0xFFF8F9FA),
  ),
  textTheme: GoogleFonts.dmSansTextTheme(),
  cardTheme: CardTheme(
    elevation: 2,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
  ),
)
```
- **Avoid:** 派手な色、AIっぽい紫グラデーション、カジュアルすぎるトーン

---

### 13. Social / Dating App
- **Best For:** マッチング、SNS、コミュニティ
- **Keywords:** カード、スワイプ、写真重視、カラフル
- **Flutter実装:**
```dart
// Tinder風スワイプカード
Draggable(
  feedback: Transform.rotate(
    angle: _rotation,
    child: ProfileCard(),
  ),
  childWhenDragging: NextCard(),
  onDragEnd: (details) => _handleSwipe(details.velocity),
  child: ProfileCard(),
)
```
- **Avoid:** 文字多すぎ、小さい写真、複雑なナビゲーション

---

### 14. Healthcare / Medical
- **Best For:** 医療、健康管理、フィットネス
- **Keywords:** 清潔感、信頼、アクセシブル、明るい
- **Flutter実装:**
```dart
ThemeData(
  colorScheme: ColorScheme.light(
    primary: Color(0xFF0077B6),    // 医療ブルー
    secondary: Color(0xFF00B4D8),
    surface: Color(0xFFFFFFFF),
  ),
  textTheme: GoogleFonts.nunitoTextTheme(),
)
```
- **Avoid:** 暗い色、不安を煽るデザイン、複雑すぎるUI

---

### 15. Gaming / Entertainment
- **Best For:** ゲーム、エンタメ、ストリーミング
- **Keywords:** ダイナミック、没入感、ダークテーマ、アニメーション
- **Flutter実装:**
```dart
ThemeData.dark().copyWith(
  colorScheme: ColorScheme.dark(
    primary: Color(0xFFFF6B6B),
    secondary: Color(0xFF4ECDC4),
  ),
  textTheme: GoogleFonts.rajdhaniTextTheme(ThemeData.dark().textTheme),
)
```
- **Avoid:** 退屈なデザイン、静的すぎるUI

---

## スタイル選択フローチャート

```
Q1: アプリの主な用途は？
├── ビジネス/生産性 → Minimalism, Swiss Style
├── ソーシャル/エンタメ → Micro-interactions, Social/Dating
├── 金融/フィンテック → Fintech, Glassmorphism
├── 健康/ウェルネス → Soft UI, Organic
├── Eコマース → Luxury, Bento Grid
├── 教育/子供向け → Claymorphism, Vibrant
├── AI/チャット → AI-Native UI
└── ゲーム → Gaming, Cyberpunk

Q2: ターゲット層は？
├── 10代〜20代 → Neubrutalism, Gen Z Chaos
├── 30代〜40代 → Minimalism, Glassmorphism
├── 50代以上 → Accessible Design, High Contrast
└── 全年齢 → Flat Design, Soft UI

Q3: ブランドの性格は？
├── 革新的 → Glassmorphism, AI-Native
├── 信頼・安定 → Minimalism, Fintech
├── 楽しい → Claymorphism, Micro-interactions
├── 高級 → Luxury, Organic
└── クリエイティブ → Neubrutalism, Bento Grid
```

---

## 全67スタイル一覧

### General Styles (49)
1. Minimalism & Swiss Style
2. Neumorphism / Soft UI
3. Glassmorphism
4. Brutalism
5. 3D & Hyperrealism
6. Vibrant & Block-based
7. Dark Mode (OLED)
8. Accessible & Ethical
9. Claymorphism
10. Aurora UI
11. Retro-Futurism
12. Flat Design
13. Skeuomorphism
14. Liquid Glass
15. Motion-Driven
16. Micro-interactions
17. Inclusive Design
18. Zero Interface
19. Soft UI Evolution
20. Neubrutalism
21. Bento Box Grid
22. Y2K Aesthetic
23. Cyberpunk UI
24. Organic Biophilic
25. AI-Native UI
26. Memphis Design
27. Vaporwave
28. Dimensional Layering
29. Exaggerated Minimalism
30. Kinetic Typography
31. Parallax Storytelling
32. Swiss Modernism 2.0
33. HUD / Sci-Fi FUI
34. Pixel Art
35. Bento Grids
36. Spatial UI (VisionOS)
37. E-Ink / Paper
38. Gen Z Chaos / Maximalism
39. Biomimetic / Organic 2.0
40. Anti-Polish / Raw Aesthetic
41. Tactile Digital
42. Nature Distilled
43. Interactive Cursor Design
44. Voice-First Multimodal
45. 3D Product Preview
46. Gradient Mesh / Aurora
47. Editorial Grid / Magazine
48. Chromatic Aberration
49. Vintage Analog / Retro Film

### Mobile App Specific (10)
50. Card-Swipe UI (Tinder式)
51. Bottom Sheet Native
52. Tab-Based Navigation
53. Drawer Navigation
54. Full-Screen Immersive
55. Split View (Tablet)
56. Floating Action Pattern
57. Pull-to-Refresh Native
58. Gesture-First UI
59. Notification-Centric

### Dashboard Styles (8)
60. Data-Dense Dashboard
61. Executive Summary
62. Real-Time Monitoring
63. Drill-Down Analytics
64. Comparative Analysis
65. Predictive Analytics
66. Financial Dashboard
67. Sales Intelligence
