# UI Psychology Patterns

優れたアプリ（Tinder、Bumble、Instagram等）から学ぶ心理学的UXパターン。

---

## 1. ゲーミフィケーション

### スワイプ（Tinder式）

**心理学的背景:**
- 変動報酬（Variable Reward）: 次に何が出るかわからないワクワク感
- スキナーの実験: 予測不能な報酬がエンゲージメントを高める
- 所有感: スワイプという能動的な行為で「選んだ」感覚

**実装ポイント:**
```dart
// スワイプカードの基本構造
Stack(
  children: [
    // 背景のカード（次のカード）
    Positioned.fill(
      child: NextCard(),
    ),
    // メインカード（ドラッグ可能）
    Draggable(
      feedback: CurrentCard(),
      childWhenDragging: const SizedBox(),
      onDragEnd: (details) => _handleSwipe(details),
      child: CurrentCard(),
    ),
  ],
)
```

**フィードバック:**
- スワイプ方向に応じた視覚的変化（色、アイコン）
- 触覚フィードバック（HapticFeedback）
- 決定的なアニメーション（カードが飛んでいく）

---

## 2. 即時フィードバック

### Doherty Threshold（400ms以内）

**原則:** ユーザーの行動に400ms以内に反応すると「快適」に感じる

**適用例:**
```dart
// タップ時の即時反応
InkWell(
  onTap: () async {
    // 1. 即座に視覚フィードバック（0ms）
    setState(() => _isPressed = true);
    
    // 2. 触覚フィードバック（10ms以内）
    await HapticFeedback.lightImpact();
    
    // 3. バックグラウンドで処理
    await _processAction();
    
    // 4. 完了表示
    setState(() => _isPressed = false);
  },
  child: AnimatedContainer(
    duration: const Duration(milliseconds: 100),
    transform: _isPressed 
      ? Matrix4.identity()..scale(0.95) 
      : Matrix4.identity(),
    child: child,
  ),
)
```

---

## 3. 進捗の可視化

### Endowed Progress Effect

**原則:** 既に進んでいると感じると、完了への動機が高まる

**適用例（プロフィール完成度）:**
```dart
// 最初から20%埋まっている状態で表示
LinearProgressIndicator(
  value: 0.2 + (completedFields / totalFields) * 0.8,
)

// コピー例
Text('プロフィール完成まであと${remaining}項目！')
```

**Tinderでの例:**
- プロフィール作成時のプログレスバー
- 「あと3項目でプロフィール完成」

---

## 4. 希少性と緊急性

### FOMO（Fear of Missing Out）

**実装パターン:**
```dart
// 期間限定表示
Container(
  padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
  decoration: BoxDecoration(
    color: Colors.red,
    borderRadius: BorderRadius.circular(4),
  ),
  child: Text(
    '残り3時間',
    style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
  ),
)

// 残り数表示
Text('残り${count}人がこの商品を見ています')

// 「○○さんがあなたをいいねしました」
// （詳細は課金で見れる → 気になる心理）
```

---

## 5. 社会的証明

### Social Proof

**実装パターン:**
```dart
// 共通の知り合い表示（Tinder）
Row(
  children: [
    Icon(Icons.people, size: 16),
    SizedBox(width: 4),
    Text('共通の友達: 3人'),
  ],
)

// レビュー・評価
Row(
  children: [
    StarRating(rating: 4.5),
    SizedBox(width: 4),
    Text('(1,234件のレビュー)'),
  ],
)

// 利用者数
Text('100万人以上が利用中')
```

---

## 6. 視覚的階層

### Von Restorff Effect（孤立効果）

**原則:** 他と異なるものは記憶に残る

**適用例:**
```dart
// 特別なアクションを目立たせる（Super Like）
Stack(
  children: [
    // 通常のいいねボタン
    CircleButton(icon: Icons.favorite, color: Colors.grey),
    
    // Super Likeボタン（特別感を出す）
    CircleButton(
      icon: Icons.star,
      color: Colors.blue,
      size: 56, // 少し大きく
      glow: true, // 光らせる
    ),
  ],
)
```

---

## 7. 認知負荷の軽減

### Prägnanz（簡潔の法則）

**原則:** シンプルで整理されたデザインは認知負荷を減らす

**Tinderの例:**
- メイン画面は写真が主役（1枚の大きな写真）
- アクションは3つ（パス、いいね、Super Like）
- 情報は必要最小限（名前、年齢、距離）

**実装:**
```dart
// 1画面の情報量を制限
class ProfileCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // メイン: 写真（画面の70%）
        Expanded(
          flex: 7,
          child: ProfileImage(),
        ),
        // サブ: 基本情報のみ（画面の30%）
        Expanded(
          flex: 3,
          child: Column(
            children: [
              Text('${name}, ${age}'),  // 最重要情報
              Text('${distance}km'),     // 次に重要
              // それ以上は詳細画面で
            ],
          ),
        ),
      ],
    );
  }
}
```

---

## 8. 習慣形成

### Hook Model（フック・モデル）

**4つのステップ:**
1. **トリガー** — 通知、メール
2. **アクション** — アプリを開く、スワイプする
3. **変動報酬** — マッチ、メッセージ
4. **投資** — プロフィール作成、メッセージ送信

**実装:**
```dart
// 適切なタイミングでの通知
// ❌ 「アプリを開いてください」
// ✅ 「田中さんがあなたにいいねしました」（具体的な報酬の予感）

// 投資を促す
// 「プロフィール写真を追加すると、マッチ率が40%上がります」
```

---

## 9. 感情的なフィードバック

### マッチ画面（Tinder式）

**構成要素:**
1. 祝福感: 「It's a Match!」の大きな文字
2. 視覚的なハイライト: 両者の写真を並べる
3. 即座のアクション: 「メッセージを送る」ボタン
4. 期待感: 「会話を始めましょう」

```dart
// マッチ画面の演出
class MatchScreen extends HookWidget {
  @override
  Widget build(BuildContext context) {
    final controller = useAnimationController(
      duration: const Duration(milliseconds: 800),
    );
    
    useEffect(() {
      controller.forward();
      HapticFeedback.heavyImpact(); // 強い触覚フィードバック
      return null;
    }, []);

    return Stack(
      children: [
        // 背景のパーティクル/紙吹雪
        ConfettiAnimation(),
        
        // メインコンテンツ
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ScaleTransition(
              scale: controller,
              child: Text(
                'マッチしました！',
                style: AppTypography.displayLarge,
              ),
            ),
            SizedBox(height: 32),
            // 二人の写真を重ねて表示
            MatchedPhotos(user1: me, user2: match),
            SizedBox(height: 32),
            AppButton(
              label: 'メッセージを送る',
              onPressed: () => openChat(match),
            ),
          ],
        ),
      ],
    );
  }
}
```

---

## 10. プライミング

### 期待を設定する

**Tinderの例:**
- 「スワイプして始めましょう」→ アクションを予告
- 写真のクオリティが高い → 全体の期待値が上がる

**実装:**
```dart
// オンボーディングで期待を設定
class OnboardingScreen extends StatelessWidget {
  final pages = [
    OnboardingPage(
      title: 'スワイプで出会い',
      description: '気になる相手を右に、そうでない場合は左にスワイプ',
      // ここでスワイプを体験させる
      interactive: SwipeDemo(),
    ),
    OnboardingPage(
      title: 'マッチしたら会話',
      description: 'お互いにいいねしたらマッチ！メッセージを送りましょう',
    ),
  ];
}
```

---

## チェックリスト

- [ ] ユーザーのアクションに400ms以内で反応している
- [ ] 触覚フィードバックを適切に使っている
- [ ] プログレス表示で完了への動機を高めている
- [ ] 重要なアクションは視覚的に差別化している
- [ ] 1画面の情報量を適切に制限している
- [ ] 感情的なフィードバック（マッチ、成功）を演出している
- [ ] 変動報酬でエンゲージメントを高めている
