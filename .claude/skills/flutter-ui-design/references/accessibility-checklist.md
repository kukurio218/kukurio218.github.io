# Accessibility Checklist

FlutterアプリのUI設計・実装時のアクセシビリティチェックリスト。

---

## 🎯 タップターゲット

### サイズ
- [ ] タップ可能な要素は最小44x44pt（推奨48x48pt）
- [ ] 隣接するタップターゲット間に十分な間隔（最小8pt）

### 実装
```dart
// ❌ 小さすぎる
IconButton(
  iconSize: 20,
  onPressed: onTap,
  icon: Icon(Icons.close),
)

// ✅ 十分なサイズ
SizedBox(
  width: 48,
  height: 48,
  child: IconButton(
    onPressed: onTap,
    icon: Icon(Icons.close),
  ),
)
```

---

## 🎨 色とコントラスト

### コントラスト比
- [ ] 通常テキスト（18pt未満）: 4.5:1以上
- [ ] 大きいテキスト（18pt以上、または14pt Bold）: 3:1以上
- [ ] UIコンポーネント（ボタン境界線等）: 3:1以上
- [ ] グラフィカル要素: 3:1以上

### 色だけに依存しない
- [ ] エラー状態は色+アイコン/テキストで表現
- [ ] 選択状態は色+形状/アイコンで表現
- [ ] リンクは色+下線で表現

### チェックツール
- Figma: Stark plugin
- Web: https://webaim.org/resources/contrastchecker/

---

## 📖 テキストとタイポグラフィ

### 読みやすさ
- [ ] 最小フォントサイズ: 12pt（推奨14pt以上）
- [ ] 行間（line-height）: 1.4〜1.6
- [ ] 段落幅: 45〜75文字
- [ ] 文字間隔: 詰めすぎない

### 動的テキストサイズ
- [ ] `MediaQuery.textScaleFactor`を考慮
- [ ] テキストが拡大されてもレイアウトが崩れない
- [ ] 固定高さでテキストが切れない

```dart
// ✅ テキストスケールを考慮
final textScale = MediaQuery.of(context).textScaleFactor;
final adjustedPadding = basePadding * (textScale > 1.5 ? 1.5 : textScale);
```

---

## 🔊 スクリーンリーダー対応

### Semantics
- [ ] 全てのインタラクティブ要素にラベルがある
- [ ] 画像に適切な代替テキスト
- [ ] 装飾的な要素は`excludeFromSemantics: true`

```dart
// ボタンのセマンティクス
Semantics(
  button: true,
  label: 'プロフィールを編集',
  child: GestureDetector(
    onTap: _editProfile,
    child: EditIcon(),
  ),
)

// 画像のセマンティクス
Semantics(
  image: true,
  label: 'ユーザーのプロフィール写真',
  child: CircleAvatar(backgroundImage: NetworkImage(url)),
)

// 装飾的な要素を除外
ExcludeSemantics(
  child: DecorativeBackground(),
)
```

### 読み上げ順序
- [ ] 論理的な読み上げ順序（左上→右下）
- [ ] 重要な情報が先に読まれる
- [ ] モーダル/ダイアログ内にフォーカスが留まる

---

## ⌨️ キーボード・フォーカス

### フォーカス管理
- [ ] フォーカス順序が論理的
- [ ] フォーカス中の要素が視覚的に明確
- [ ] キーボードトラップがない

```dart
// フォーカスの可視化
Focus(
  child: Container(
    decoration: BoxDecoration(
      border: Border.all(
        color: isFocused ? AppColors.primary : Colors.transparent,
        width: 2,
      ),
    ),
    child: child,
  ),
)
```

### 入力フィールド
- [ ] ラベルが常に表示（placeholder依存しない）
- [ ] エラーメッセージがフィールドに関連付け
- [ ] 適切なキーボードタイプ

```dart
TextFormField(
  decoration: InputDecoration(
    labelText: 'メールアドレス', // ← placeholderではなくlabel
    errorText: hasError ? 'メールアドレスの形式が正しくありません' : null,
  ),
  keyboardType: TextInputType.emailAddress,
  textInputAction: TextInputAction.next,
  autofillHints: [AutofillHints.email],
)
```

---

## 🎬 モーション・アニメーション

### 動きの軽減
- [ ] `MediaQuery.of(context).disableAnimations`を確認
- [ ] 重要な情報は動きがなくても伝わる
- [ ] 3秒以上の自動アニメーションは避ける or 停止可能

```dart
// アニメーション無効化を考慮
final reduceMotion = MediaQuery.of(context).disableAnimations;

AnimatedContainer(
  duration: reduceMotion 
    ? Duration.zero 
    : const Duration(milliseconds: 300),
  // ...
)
```

### 点滅・フラッシュ
- [ ] 1秒間に3回以上の点滅なし
- [ ] 画面の25%以上を占める点滅なし

---

## 📱 タッチ・ジェスチャー

### 代替手段
- [ ] スワイプ操作にボタン代替がある
- [ ] ピンチ操作にボタン代替がある
- [ ] ドラッグ操作にボタン代替がある

```dart
// スワイプ + ボタン両方を提供
Dismissible(
  key: ValueKey(item.id),
  child: ListTile(
    title: Text(item.title),
    trailing: IconButton(
      icon: Icon(Icons.delete),
      onPressed: () => deleteItem(item),
      tooltip: '削除',
    ),
  ),
  onDismissed: (_) => deleteItem(item),
)
```

### 時間制限
- [ ] タイムアウトがある操作は延長可能
- [ ] ダブルタップの間隔は調整可能

---

## 🔔 フィードバック

### 状態変化の通知
- [ ] 成功/エラーを視覚+触覚+音で通知
- [ ] ローディング状態が明確

```dart
// 複数の感覚でフィードバック
Future<void> onActionSuccess() async {
  // 触覚
  await HapticFeedback.mediumImpact();
  
  // 視覚
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(content: Text('保存しました')),
  );
  
  // スクリーンリーダー
  SemanticsService.announce('保存が完了しました', TextDirection.ltr);
}
```

---

## ✅ テスト方法

1. **スクリーンリーダーテスト**
   - iOS: VoiceOver
   - Android: TalkBack
   
2. **カラーテスト**
   - グレースケール表示で確認
   - コントラストチェッカー使用

3. **拡大表示テスト**
   - テキストサイズ200%で確認
   - 画面拡大で確認

4. **キーボードテスト**
   - 外部キーボードで全操作可能か確認

5. **Flutterツール**
   ```dart
   // デバッグモードでセマンティクス確認
   MaterialApp(
     showSemanticsDebugger: true,
     // ...
   )
   ```
