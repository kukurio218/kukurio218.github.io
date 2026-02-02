# Typography Pairings for Flutter Apps

56組のフォントペアリング集。Google Fonts対応、日本語サポート付き。

---

## 使い方

1. ムード/業種から適切なペアリングを選択
2. pubspec.yamlに`google_fonts`パッケージを追加
3. コードをコピーして使用

```yaml
# pubspec.yaml
dependencies:
  google_fonts: ^6.1.0
```

---

## 🎯 モダン / ビジネス（10組）

### 1. DM Sans
- **ムード:** クリーン、モダン、プロフェッショナル
- **Best For:** SaaS、ダッシュボード、ビジネスツール
```dart
textTheme: GoogleFonts.dmSansTextTheme(),
```

### 2. Inter
- **ムード:** ニュートラル、読みやすい、万能
- **Best For:** あらゆるアプリ、UI重視
```dart
textTheme: GoogleFonts.interTextTheme(),
```
⚠️ 非常に一般的。差別化したい場合は別のフォントを検討

### 3. Plus Jakarta Sans
- **ムード:** フレンドリー、モダン、洗練
- **Best For:** スタートアップ、テック企業、SaaS
```dart
textTheme: GoogleFonts.plusJakartaSansTextTheme(),
```

### 4. Outfit
- **ムード:** ジオメトリック、クリーン、未来的
- **Best For:** テック、フィンテック、イノベーション
```dart
textTheme: GoogleFonts.outfitTextTheme(),
```

### 5. Sora
- **ムード:** テクニカル、精密、モダン
- **Best For:** 開発ツール、テック、データ
```dart
textTheme: GoogleFonts.soraTextTheme(),
```

### 6. Manrope
- **ムード:** 柔らかいジオメトリック、フレンドリー
- **Best For:** SaaS、プロダクティビティ
```dart
textTheme: GoogleFonts.manropeTextTheme(),
```

### 7. Nunito
- **ムード:** 丸みを帯びた、フレンドリー、親しみやすい
- **Best For:** 教育、ヘルスケア、コンシューマーアプリ
```dart
textTheme: GoogleFonts.nunitoTextTheme(),
```

### 8. Poppins
- **ムード:** ジオメトリック、ポップ、モダン
- **Best For:** スタートアップ、マーケティング、モバイルアプリ
```dart
textTheme: GoogleFonts.poppinsTextTheme(),
```

### 9. Work Sans
- **ムード:** ニュートラル、クリーン、実用的
- **Best For:** ビジネス、ニュース、コンテンツ
```dart
textTheme: GoogleFonts.workSansTextTheme(),
```

### 10. Figtree
- **ムード:** フレンドリー、モダン、柔らかい
- **Best For:** SaaS、スタートアップ、テック
```dart
textTheme: GoogleFonts.figtreeTextTheme(),
```

---

## ✨ エレガント / 高級（8組）

### 11. Cormorant Garamond (Display) + Montserrat (Body)
- **ムード:** エレガント、高級、洗練
- **Best For:** ラグジュアリーブランド、ファッション、ホテル
```dart
// Display: Cormorant Garamond
// Body: Montserrat
```

### 12. Playfair Display + Source Sans 3
- **ムード:** クラシック、エディトリアル、信頼感
- **Best For:** 雑誌、ニュース、出版
```dart
// Display: Playfair Display
// Body: Source Sans 3
```

### 13. Libre Baskerville + Open Sans
- **ムード:** 伝統的、読みやすい、知的
- **Best For:** 法律、コンサルティング、金融
```dart
// Display: Libre Baskerville
// Body: Open Sans
```

### 14. Lora + Raleway
- **ムード:** 温かみ、エレガント、バランス
- **Best For:** ウェルネス、スパ、ライフスタイル
```dart
// Display: Lora
// Body: Raleway
```

### 15. Crimson Pro + Inter
- **ムード:** モダンセリフ、知的、読みやすい
- **Best For:** 読書アプリ、ブログ、ニュース
```dart
// Display: Crimson Pro
// Body: Inter
```

### 16. EB Garamond + Karla
- **ムード:** クラシック＋モダン、バランス
- **Best For:** 出版、教育、アカデミック
```dart
// Display: EB Garamond
// Body: Karla
```

### 17. Fraunces + Commissioner
- **ムード:** 個性的、アート、クリエイティブ
- **Best For:** ギャラリー、アート、デザイン
```dart
// Display: Fraunces
// Body: Commissioner
```

### 18. Bodoni Moda + DM Sans
- **ムード:** ファッション、高級、コントラスト
- **Best For:** ファッション、ビューティー、ラグジュアリー
```dart
// Display: Bodoni Moda
// Body: DM Sans
```

---

## 🎮 エネルギッシュ / ゲーム（6組）

### 19. Rajdhani + Roboto
- **ムード:** テック、ゲーミング、エネルギッシュ
- **Best For:** ゲーム、esports、テック
```dart
// Display: Rajdhani
// Body: Roboto
```

### 20. Bebas Neue + Open Sans
- **ムード:** 大胆、スポーツ、インパクト
- **Best For:** スポーツ、フィットネス、イベント
```dart
// Display: Bebas Neue
// Body: Open Sans
```

### 21. Orbitron + Exo 2
- **ムード:** 未来的、SF、テクノロジー
- **Best For:** SF、宇宙、サイバーパンク
```dart
// Display: Orbitron
// Body: Exo 2
```

### 22. Teko + Barlow
- **ムード:** コンデンス、スポーツ、インダストリアル
- **Best For:** スポーツ、製造、テック
```dart
// Display: Teko
// Body: Barlow
```

### 23. Russo One + Roboto
- **ムード:** ゲーミング、ボールド、インパクト
- **Best For:** ゲーム、エンタメ
```dart
// Display: Russo One
// Body: Roboto
```

---

## 🌿 フレンドリー / カジュアル（8組）

### 24. Quicksand
- **ムード:** 丸い、優しい、カジュアル
- **Best For:** ライフスタイル、子供向け、カジュアル
```dart
textTheme: GoogleFonts.quicksandTextTheme(),
```

### 25. Comfortaa + Nunito
- **ムード:** 丸い、モダン、フレンドリー
- **Best For:** 子供向け、教育、カジュアル
```dart
// Display: Comfortaa
// Body: Nunito
```

### 26. Varela Round + Open Sans
- **ムード:** 丸い、シンプル、親しみやすい
- **Best For:** モバイルアプリ、スタートアップ
```dart
// Display: Varela Round
// Body: Open Sans
```

### 27. Cabin
- **ムード:** ヒューマニスト、バランス、読みやすい
- **Best For:** コンテンツ、ブログ、ニュース
```dart
textTheme: GoogleFonts.cabinTextTheme(),
```

### 28. Rubik
- **ムード:** ジオメトリック、フレンドリー、モダン
- **Best For:** アプリ、ダッシュボード、プロダクト
```dart
textTheme: GoogleFonts.rubikTextTheme(),
```

### 29. Lexend
- **ムード:** 読みやすさ最適化、アクセシブル
- **Best For:** 教育、アクセシビリティ重視
```dart
textTheme: GoogleFonts.lexendTextTheme(),
```

### 30. Albert Sans
- **ムード:** モダン、クリーン、バーサタイル
- **Best For:** 万能、モダンアプリ
```dart
textTheme: GoogleFonts.albertSansTextTheme(),
```

---

## 🇯🇵 日本語対応（12組）

### 31. Noto Sans JP
- **ムード:** ニュートラル、万能、Google標準
- **Best For:** あらゆる日本語アプリ
```dart
textTheme: GoogleFonts.notoSansJpTextTheme(),
```

### 32. Zen Kaku Gothic New
- **ムード:** 現代的、クリーン、読みやすい
- **Best For:** ビジネス、SaaS、モダン
```dart
textTheme: GoogleFonts.zenKakuGothicNewTextTheme(),
```

### 33. M PLUS Rounded 1c
- **ムード:** 丸ゴシック、フレンドリー、カジュアル
- **Best For:** カジュアル、ゲーム、子供向け
```dart
textTheme: GoogleFonts.mPlusRounded1cTextTheme(),
```

### 34. M PLUS 1p
- **ムード:** 万能ゴシック、クリーン
- **Best For:** 万能、テック
```dart
textTheme: GoogleFonts.mPlus1pTextTheme(),
```

### 35. Kosugi Maru
- **ムード:** 丸ゴシック、親しみやすい
- **Best For:** カジュアル、モバイル
```dart
textTheme: GoogleFonts.kosugiMaruTextTheme(),
```

### 36. Sawarabi Gothic
- **ムード:** シンプル、軽量
- **Best For:** 軽量な日本語表示
```dart
textTheme: GoogleFonts.sawarabiGothicTextTheme(),
```

### 37. Noto Serif JP + Noto Sans JP
- **ムード:** 和風、エレガント、読みやすい
- **Best For:** 和風アプリ、ニュース、読書
```dart
// Display: Noto Serif JP
// Body: Noto Sans JP
```

### 38. Shippori Mincho + Noto Sans JP
- **ムード:** 明朝体、伝統的、知的
- **Best For:** 伝統、出版、高級
```dart
// Display: Shippori Mincho
// Body: Noto Sans JP
```

### 39. DM Sans + Noto Sans JP
- **ムード:** 英語モダン + 日本語万能
- **Best For:** グローバル企業、バイリンガル

### 40. Inter + Noto Sans JP
- **ムード:** ニュートラル、万能、読みやすい
- **Best For:** テック、SaaS、万能

### 41. Plus Jakarta Sans + Zen Kaku Gothic New
- **ムード:** モダン、フレンドリー
- **Best For:** スタートアップ、モダン

### 42. BIZ UDGothic
- **ムード:** ユニバーサルデザイン、読みやすい
- **Best For:** アクセシビリティ重視、公共
```dart
textTheme: GoogleFonts.bizUDGothicTextTheme(),
```

---

## 💻 モノスペース / コード（6組）

### 43. JetBrains Mono
- **ムード:** コーディング、テック、精密
- **Best For:** IDE、開発ツール、コード表示
```dart
GoogleFonts.jetBrainsMono(),
```

### 44. Fira Code
- **ムード:** リガチャ対応、コーディング
- **Best For:** プログラミング、ターミナル
```dart
GoogleFonts.firaCode(),
```

### 45. Source Code Pro
- **ムード:** Adobe、クリーン、読みやすい
- **Best For:** ドキュメント、コード
```dart
GoogleFonts.sourceCodePro(),
```

### 46. IBM Plex Mono
- **ムード:** IBM、クリーン、プロフェッショナル
- **Best For:** エンタープライズ、ドキュメント
```dart
GoogleFonts.ibmPlexMono(),
```

### 47. Roboto Mono
- **ムード:** Google、ニュートラル
- **Best For:** 数値表示、コード、データ
```dart
GoogleFonts.robotoMono(),
```

### 48. Space Mono
- **ムード:** テック、未来的、個性的
- **Best For:** テック、クリエイティブ
```dart
GoogleFonts.spaceMono(),
```

---

## Flutter実装例

```dart
// lib/core/theme/app_typography.dart
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

abstract class AppTypography {
  // TextTheme
  static TextTheme get textTheme => TextTheme(
    displayLarge: GoogleFonts.dmSans(
      fontSize: 57,
      fontWeight: FontWeight.w400,
      letterSpacing: -0.25,
    ),
    displayMedium: GoogleFonts.dmSans(
      fontSize: 45,
      fontWeight: FontWeight.w400,
    ),
    displaySmall: GoogleFonts.dmSans(
      fontSize: 36,
      fontWeight: FontWeight.w400,
    ),
    headlineLarge: GoogleFonts.dmSans(
      fontSize: 32,
      fontWeight: FontWeight.w600,
    ),
    headlineMedium: GoogleFonts.dmSans(
      fontSize: 28,
      fontWeight: FontWeight.w600,
    ),
    headlineSmall: GoogleFonts.dmSans(
      fontSize: 24,
      fontWeight: FontWeight.w600,
    ),
    titleLarge: GoogleFonts.dmSans(
      fontSize: 22,
      fontWeight: FontWeight.w500,
    ),
    titleMedium: GoogleFonts.dmSans(
      fontSize: 16,
      fontWeight: FontWeight.w500,
      letterSpacing: 0.15,
    ),
    titleSmall: GoogleFonts.dmSans(
      fontSize: 14,
      fontWeight: FontWeight.w500,
      letterSpacing: 0.1,
    ),
    bodyLarge: GoogleFonts.dmSans(
      fontSize: 16,
      fontWeight: FontWeight.w400,
      letterSpacing: 0.5,
    ),
    bodyMedium: GoogleFonts.dmSans(
      fontSize: 14,
      fontWeight: FontWeight.w400,
      letterSpacing: 0.25,
    ),
    bodySmall: GoogleFonts.dmSans(
      fontSize: 12,
      fontWeight: FontWeight.w400,
      letterSpacing: 0.4,
    ),
    labelLarge: GoogleFonts.dmSans(
      fontSize: 14,
      fontWeight: FontWeight.w500,
      letterSpacing: 0.1,
    ),
    labelMedium: GoogleFonts.dmSans(
      fontSize: 12,
      fontWeight: FontWeight.w500,
      letterSpacing: 0.5,
    ),
    labelSmall: GoogleFonts.dmSans(
      fontSize: 11,
      fontWeight: FontWeight.w500,
      letterSpacing: 0.5,
    ),
  );
  
  // 日本語TextTheme
  static TextTheme get japaneseTextTheme => GoogleFonts.notoSansJpTextTheme();
  
  // モノスペース（コード、数値表示用）
  static TextStyle get mono => GoogleFonts.jetBrainsMono(
    fontSize: 14,
    fontWeight: FontWeight.w400,
  );
  
  // 数値表示用（等幅数字）
  static TextStyle get tabularNumbers => GoogleFonts.robotoMono(
    fontSize: 16,
    fontWeight: FontWeight.w500,
    fontFeatures: [FontFeature.tabularFigures()],
  );
}

// ThemeDataへの適用例
ThemeData buildTheme() {
  return ThemeData(
    textTheme: AppTypography.textTheme,
    primaryTextTheme: AppTypography.textTheme,
  );
}
```

---

## フォント選択フローチャート

```
Q1: アプリの性格は？
├── プロフェッショナル/ビジネス
│   ├── 信頼重視 → DM Sans, Inter, Work Sans
│   ├── モダン重視 → Plus Jakarta Sans, Outfit
│   └── 高級感 → Cormorant Garamond + Montserrat
│
├── フレンドリー/カジュアル
│   ├── 丸み重視 → Quicksand, Nunito, M PLUS Rounded
│   ├── 親しみやすさ → Poppins, Rubik
│   └── 子供向け → Comfortaa, Kosugi Maru
│
├── テック/ゲーム
│   ├── 未来的 → Space Grotesk, Orbitron
│   ├── ゲーミング → Rajdhani, Russo One
│   └── コーディング → JetBrains Mono, Fira Code
│
└── エレガント/高級
    ├── クラシック → Playfair Display, Libre Baskerville
    ├── ファッション → Bodoni Moda, EB Garamond
    └── 和風 → Shippori Mincho, Noto Serif JP

Q2: 日本語対応が必要？
├── Yes
│   ├── ビジネス → Noto Sans JP, Zen Kaku Gothic New
│   ├── カジュアル → M PLUS Rounded 1c, Kosugi Maru
│   ├── 高級/和風 → Noto Serif JP, Shippori Mincho
│   └── アクセシブル → BIZ UDGothic
│
└── No → 英語フォントのみでOK

Q3: 数値/コード表示がある？
├── Yes → Roboto Mono, JetBrains Mono を併用
└── No → 通常フォントでOK
```

---

## 避けるべきパターン

### ❌ AIっぽいフォント選択
```dart
// これらは「AIが生成した」感が出やすい
GoogleFonts.inter()        // 非常に一般的
GoogleFonts.roboto()       // Androidデフォルト
GoogleFonts.spaceGrotesk() // AI生成UIで多用
```

### ❌ 読みにくい組み合わせ
```dart
// 両方装飾的すぎる
displayTextTheme: GoogleFonts.dancingScript(),
bodyTextTheme: GoogleFonts.pacifico(),

// コントラスト不足（Serif + Serifで似すぎる）
```

### ❌ 日本語非対応フォントで日本語表示
```dart
// 日本語が豆腐（□）になる
Text('こんにちは', style: GoogleFonts.montserrat())
```

---

## ベストプラクティス

### ✅ フォント数を制限
```dart
// 1〜2ファミリーに抑える
// Display用 + Body用 で十分
```

### ✅ Weight階層を明確に
```dart
// Regular (400) - Body
// Medium (500) - Label, Subtitle
// SemiBold (600) - Heading
// Bold (700) - Display, Emphasis
```

### ✅ 日本語と英語を組み合わせる
```dart
// 英語: DM Sans（モダン）
// 日本語: Noto Sans JP（万能）
// → fontFamilyFallback で設定
```

### ✅ 数値は等幅で
```dart
// 価格、統計など数値が並ぶ箇所
Text(
  '¥12,345',
  style: GoogleFonts.robotoMono(
    fontFeatures: [FontFeature.tabularFigures()],
  ),
)
```

---

## Google Fonts URLジェネレーター

よく使う組み合わせのGoogle Fonts URL:

### DM Sans + Noto Sans JP
```
https://fonts.google.com/share?selection.family=DM+Sans:wght@400;500;600;700|Noto+Sans+JP:wght@400;500;600;700
```

### Plus Jakarta Sans + Zen Kaku Gothic New
```
https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:wght@400;500;600;700|Zen+Kaku+Gothic+New:wght@400;500;700
```

### Cormorant Garamond + Montserrat + Noto Serif JP
```
https://fonts.google.com/share?selection.family=Cormorant+Garamond:wght@400;500;600;700|Montserrat:wght@400;500;600|Noto+Serif+JP:wght@400;500;600;700
```
