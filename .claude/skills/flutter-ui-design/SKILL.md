---
name: flutter-ui-design
description: FlutterモバイルアプリのUI/UX設計・構築・レビューを壁打ち形式で支援するスキル。(1) ゼロからの設計 - 質問ベースでアイデアを具体化、(2) 既存UIの改善 - スクショやコードをレビューして改善点を提案、(3) コード生成時の品質担保 - AIっぽいデザインを回避した実装。hooks_riverpod、カスタムデザインシステム対応。設計ドキュメント(Markdown)と実装可能なFlutterコードを出力。
---

# Flutter UI Design Skill

FlutterアプリのUI/UX設計を壁打ち形式で徹底的に詰めるスキル。

## 3つのモード

ユーザーの要求に応じて適切なモードを選択する。

### Mode A: Design（ゼロから設計）

新規アプリ・画面の設計。`references/design-phases.md`の質問フローに従い、20問以上で徹底的に詰める。

**フロー:**
1. コンテキスト理解（5問）→ 何を作る？誰のため？
2. ブランド・トーン定義（4問）→ 色・フォント・雰囲気
3. 情報設計（4問）→ 画面構成・ユーザーフロー
4. ビジュアル方向性（4問）→ 参考アプリ・差別化
5. インタラクション設計（3問）→ アニメーション・フィードバック
6. 設計ドキュメント出力

### Mode B: Review（既存UIの改善）

スクリーンショットまたはコードを受け取り、改善点を洗い出す。

**チェック観点:**
- AIっぽさパターン → `references/ai-patterns-to-avoid.md`
- アクセシビリティ → `references/accessibility-checklist.md`
- UXライティング → `references/ux-writing-guide.md`
- 心理学的UXパターン → `references/ui-psychology.md`

**出力:** Critical / Major / Minor に分類した改善リスト

### Mode C: Generate（品質担保したコード生成）

Flutterコードを生成する際、AIっぽさを回避したクオリティを担保。

**事前チェック:**
- `references/ai-patterns-to-avoid.md`のパターンを回避
- `references/flutter-best-practices.md`に従った実装

**出力:** 設計意図コメント付きFlutterコード

---

## 技術スタック

- **状態管理:** hooks_riverpod（flutter_hooks + riverpod）
- **デザインシステム:** カスタム（Material 3は非推奨）
- **アーキテクチャ:** MVVM + Feature-First

---

## 参照ファイル

### コア
| ファイル | 用途 |
|---------|------|
| `references/design-phases.md` | 設計フェーズごとの質問フロー（20問+） |
| `references/ai-patterns-to-avoid.md` | AIっぽいUIパターンの回避リスト |
| `references/flutter-best-practices.md` | Flutter固有のベストプラクティス |
| `references/design-doc-template.md` | 設計ドキュメントテンプレート |

### デザインシステム
| ファイル | 用途 |
|---------|------|
| `references/ui-styles-catalog.md` | 67種類のUIスタイルカタログ（Flutter実装例付き） |
| `references/industry-rules.md` | 50+の業種別デザインルール |
| `references/color-palettes.md` | 業種・ムード別カラーパレット集 |
| `references/font-pairings.md` | 56組のフォントペアリング（日本語対応） |

### 品質担保
| ファイル | 用途 |
|---------|------|
| `references/pre-delivery-checklist.md` | 納品前チェックリスト（Flutter固有） |
| `references/accessibility-checklist.md` | アクセシビリティチェックリスト |
| `references/ux-writing-guide.md` | UXライティングの原則 |

### 参考資料
| ファイル | 用途 |
|---------|------|
| `references/ui-psychology.md` | 心理学的UXパターン（Tinder等から学ぶ） |
| `references/app-categories.md` | 9カテゴリのアプリ別設計ポイント |

---

## 重要な原則

1. **質問ベースで進める** — 一方的に提案せず、ユーザーの意図を深掘りする
2. **AIっぽさを徹底排除** — 紫グラデーション、Inter、3カラムカードなどを避ける
3. **具体的な参考を活用** — Mobbin、優れたアプリから学ぶ
4. **ブランド一貫性** — プロジェクトごとに定義したトーンを全画面で維持
5. **実装可能性** — 設計は必ずFlutterで実現可能な形に落とし込む
