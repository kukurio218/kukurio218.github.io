# Color Palettes for Flutter Apps

業種・ムード別のカラーパレット集。Flutter Colorで即座に使用可能。

---

## 使い方

1. 業種/ムードから適切なパレットを選択
2. Hexコードをコピー
3. `AppColors`クラスに定義

```dart
abstract class AppColors {
  static const primary = Color(0xFF______);
  static const secondary = Color(0xFF______);
  static const background = Color(0xFF______);
  static const surface = Color(0xFF______);
  static const text = Color(0xFF______);
  static const textSecondary = Color(0xFF______);
  static const accent = Color(0xFF______);
  static const error = Color(0xFFE53935);
  static const success = Color(0xFF43A047);
  static const warning = Color(0xFFFB8C00);
}
```

---

## 🏢 SaaS / ビジネス

### Professional Blue
```
Primary:    #0066CC  (Trust Blue)
Secondary:  #4A90D9  (Light Blue)
Background: #F8FAFC  (Cool White)
Surface:    #FFFFFF  (White)
Text:       #1A202C  (Dark Gray)
Accent:     #10B981  (Success Green)
```
**Best For:** B2B SaaS、生産性ツール、ダッシュボード

### Slate Modern
```
Primary:    #334155  (Slate)
Secondary:  #64748B  (Slate Light)
Background: #F1F5F9  (Slate 100)
Surface:    #FFFFFF  (White)
Text:       #0F172A  (Slate 900)
Accent:     #3B82F6  (Blue)
```
**Best For:** 開発ツール、管理画面、プロフェッショナル

### Corporate Navy
```
Primary:    #1E3A5F  (Navy)
Secondary:  #3D5A80  (Blue Gray)
Background: #FAFAFA  (Light Gray)
Surface:    #FFFFFF  (White)
Text:       #1A1A2E  (Dark)
Accent:     #EE6C4D  (Coral)
```
**Best For:** エンタープライズ、コンサルティング

---

## 💰 金融 / フィンテック

### Banking Trust
```
Primary:    #0A2463  (Deep Blue)
Secondary:  #3E92CC  (Sky Blue)
Background: #F8F9FA  (Light)
Surface:    #FFFFFF  (White)
Text:       #212529  (Dark)
Accent:     #D4AF37  (Gold)
```
**Best For:** 銀行、資産管理、保険

### Fintech Modern
```
Primary:    #00C896  (Mint Green)
Secondary:  #00A67E  (Deep Green)
Background: #0D1117  (Dark)
Surface:    #161B22  (Dark Surface)
Text:       #F0F6FC  (Light)
Accent:     #58A6FF  (Blue)
```
**Best For:** 決済、投資、フィンテックスタートアップ

### Crypto Dark
```
Primary:    #F7931A  (Bitcoin Orange)
Secondary:  #627EEA  (Ethereum Blue)
Background: #0B0E11  (Black)
Surface:    #1C2127  (Dark Gray)
Text:       #EAECEF  (Light)
Accent:     #00FFA3  (Neon Green)
```
**Best For:** 暗号資産、Web3、トレーディング

---

## 💊 ヘルスケア / ウェルネス

### Medical Clean
```
Primary:    #0077B6  (Medical Blue)
Secondary:  #00B4D8  (Cyan)
Background: #FFFFFF  (White)
Surface:    #F8FBFF  (Light Blue)
Text:       #023047  (Dark Blue)
Accent:     #2EC4B6  (Teal)
```
**Best For:** 病院、クリニック、医療アプリ

### Wellness Calm
```
Primary:    #7C9A92  (Sage)
Secondary:  #A8D5BA  (Mint)
Background: #FDF8F4  (Warm White)
Surface:    #FFFFFF  (White)
Text:       #2D3436  (Charcoal)
Accent:     #E8B4B8  (Soft Pink)
```
**Best For:** 瞑想、メンタルヘルス、セラピー

### Fitness Energy
```
Primary:    #FF6B35  (Orange)
Secondary:  #F7C59F  (Peach)
Background: #1A1A2E  (Dark)
Surface:    #252A34  (Dark Surface)
Text:       #EAEAEA  (Light)
Accent:     #08D9D6  (Cyan)
```
**Best For:** フィットネス、ワークアウト、スポーツ

---

## 🛒 Eコマース

### E-commerce Clean
```
Primary:    #FF6B6B  (Coral)
Secondary:  #4ECDC4  (Teal)
Background: #FFFFFF  (White)
Surface:    #F7F7F7  (Light Gray)
Text:       #2C3E50  (Dark)
Accent:     #FFE66D  (Yellow)
```
**Best For:** 一般的なEコマース、マーケットプレイス

### Luxury Black
```
Primary:    #1A1A1A  (Black)
Secondary:  #333333  (Dark Gray)
Background: #FAFAFA  (Off White)
Surface:    #FFFFFF  (White)
Text:       #1A1A1A  (Black)
Accent:     #D4AF37  (Gold)
```
**Best For:** 高級ブランド、ファッション、ジュエリー

### Food Appetite
```
Primary:    #E63946  (Red)
Secondary:  #F4A261  (Orange)
Background: #FFFAF0  (Warm White)
Surface:    #FFFFFF  (White)
Text:       #2B2D42  (Dark)
Accent:     #2A9D8F  (Teal)
```
**Best For:** フードデリバリー、レストラン、グロサリー

---

## 💬 ソーシャル / コミュニケーション

### Social Vibrant
```
Primary:    #E1306C  (Pink)
Secondary:  #F77737  (Orange)
Background: #FAFAFA  (Light)
Surface:    #FFFFFF  (White)
Text:       #262626  (Dark)
Accent:     #5B51D8  (Purple)
```
**Best For:** SNS、写真共有、インフルエンサー

### Dating Romance
```
Primary:    #FD5068  (Coral Pink)
Secondary:  #FF7E5F  (Peach)
Background: #FFF5F5  (Blush)
Surface:    #FFFFFF  (White)
Text:       #2D3436  (Dark)
Accent:     #A8E6CF  (Mint)
```
**Best For:** マッチング、デーティング

### Messaging Simple
```
Primary:    #0084FF  (Messenger Blue)
Secondary:  #00C6FF  (Light Blue)
Background: #FFFFFF  (White)
Surface:    #F0F2F5  (Light Gray)
Text:       #050505  (Black)
Accent:     #44BEC7  (Teal)
```
**Best For:** メッセージング、チャット

---

## 🎮 エンターテインメント / ゲーム

### Streaming Dark
```
Primary:    #E50914  (Netflix Red)
Secondary:  #B81D24  (Dark Red)
Background: #141414  (Black)
Surface:    #1F1F1F  (Dark Gray)
Text:       #FFFFFF  (White)
Accent:     #46D369  (Green)
```
**Best For:** 動画ストリーミング、映画

### Gaming Neon
```
Primary:    #9D4EDD  (Purple)
Secondary:  #7B2CBF  (Deep Purple)
Background: #10002B  (Dark Purple)
Surface:    #240046  (Purple Surface)
Text:       #E0AAFF  (Light Purple)
Accent:     #00F5D4  (Neon Cyan)
```
**Best For:** ゲーム、esports、ストリーミング

### Music Gradient
```
Primary:    #1DB954  (Spotify Green)
Secondary:  #1ED760  (Light Green)
Background: #121212  (Dark)
Surface:    #181818  (Dark Surface)
Text:       #FFFFFF  (White)
Accent:     #B3B3B3  (Gray)
```
**Best For:** 音楽ストリーミング、ポッドキャスト

---

## 📚 教育 / 学習

### Education Friendly
```
Primary:    #58CC02  (Duolingo Green)
Secondary:  #89E219  (Light Green)
Background: #FFFFFF  (White)
Surface:    #F7F7F7  (Light)
Text:       #4B4B4B  (Dark Gray)
Accent:     #FF9600  (Orange)
```
**Best For:** 言語学習、ゲーミフィケーション

### Academic Classic
```
Primary:    #2C3E50  (Navy)
Secondary:  #3498DB  (Blue)
Background: #FAFBFC  (Light)
Surface:    #FFFFFF  (White)
Text:       #2C3E50  (Navy)
Accent:     #E74C3C  (Red)
```
**Best For:** 大学、研究、オンラインコース

### Kids Playful
```
Primary:    #FF6B6B  (Coral)
Secondary:  #4ECDC4  (Teal)
Background: #FFF9E6  (Cream)
Surface:    #FFFFFF  (White)
Text:       #2D3436  (Dark)
Accent:     #FFE66D  (Yellow)
```
**Best For:** 子供向け教育、ゲーム

---

## 🌿 サステナビリティ / 自然

### Eco Green
```
Primary:    #2D5A3D  (Forest Green)
Secondary:  #5B8C5A  (Sage)
Background: #F5F5DC  (Beige)
Surface:    #FFFFFF  (White)
Text:       #1B4332  (Dark Green)
Accent:     #D4A373  (Tan)
```
**Best For:** エコ製品、サステナビリティ、自然食品

### Ocean Blue
```
Primary:    #006D77  (Teal)
Secondary:  #83C5BE  (Light Teal)
Background: #EDF6F9  (Light Cyan)
Surface:    #FFFFFF  (White)
Text:       #264653  (Dark)
Accent:     #FFDDD2  (Peach)
```
**Best For:** 海洋保護、環境、アウトドア

---

## 🌙 ダークモード専用

### OLED Black
```
Primary:    #BB86FC  (Purple)
Secondary:  #03DAC6  (Teal)
Background: #000000  (Pure Black)
Surface:    #121212  (Dark Gray)
Text:       #FFFFFF  (White)
Accent:     #CF6679  (Pink)
```
**Best For:** OLED対応、省電力

### Dark Elegant
```
Primary:    #6C63FF  (Indigo)
Secondary:  #5A52E0  (Deep Indigo)
Background: #0D1117  (GitHub Dark)
Surface:    #161B22  (Dark Surface)
Text:       #C9D1D9  (Light Gray)
Accent:     #58A6FF  (Blue)
```
**Best For:** 開発ツール、コーディング

### Dark Warm
```
Primary:    #F59E0B  (Amber)
Secondary:  #D97706  (Dark Amber)
Background: #18181B  (Zinc 900)
Surface:    #27272A  (Zinc 800)
Text:       #FAFAFA  (Zinc 50)
Accent:     #22D3EE  (Cyan)
```
**Best For:** ナイトモード、読書アプリ

---

## Flutter実装例

```dart
// lib/core/theme/app_colors.dart
import 'package:flutter/material.dart';

abstract class AppColors {
  // Light Mode
  static const primary = Color(0xFF0066CC);
  static const primaryLight = Color(0xFF4A90D9);
  static const primaryDark = Color(0xFF004C99);
  
  static const secondary = Color(0xFF10B981);
  static const secondaryLight = Color(0xFF34D399);
  
  static const background = Color(0xFFF8FAFC);
  static const surface = Color(0xFFFFFFFF);
  static const surfaceVariant = Color(0xFFF1F5F9);
  
  static const textPrimary = Color(0xFF1A202C);
  static const textSecondary = Color(0xFF64748B);
  static const textDisabled = Color(0xFF94A3B8);
  
  static const border = Color(0xFFE2E8F0);
  static const divider = Color(0xFFF1F5F9);
  
  // Semantic Colors
  static const error = Color(0xFFE53935);
  static const errorLight = Color(0xFFFFEBEE);
  static const success = Color(0xFF43A047);
  static const successLight = Color(0xFFE8F5E9);
  static const warning = Color(0xFFFB8C00);
  static const warningLight = Color(0xFFFFF3E0);
  static const info = Color(0xFF2196F3);
  static const infoLight = Color(0xFFE3F2FD);
  
  // Dark Mode
  static const darkPrimary = Color(0xFF4A90D9);
  static const darkBackground = Color(0xFF0D1117);
  static const darkSurface = Color(0xFF161B22);
  static const darkTextPrimary = Color(0xFFF0F6FC);
  static const darkTextSecondary = Color(0xFF8B949E);
}

// ColorScheme生成
extension AppColorsExtension on AppColors {
  static ColorScheme get lightScheme => ColorScheme.light(
    primary: AppColors.primary,
    onPrimary: Colors.white,
    secondary: AppColors.secondary,
    onSecondary: Colors.white,
    surface: AppColors.surface,
    onSurface: AppColors.textPrimary,
    error: AppColors.error,
    onError: Colors.white,
  );
  
  static ColorScheme get darkScheme => ColorScheme.dark(
    primary: AppColors.darkPrimary,
    onPrimary: Colors.black,
    secondary: AppColors.secondary,
    onSecondary: Colors.black,
    surface: AppColors.darkSurface,
    onSurface: AppColors.darkTextPrimary,
    error: AppColors.error,
    onError: Colors.white,
  );
}
```
