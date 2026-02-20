---
title: "AIニュース速報【2026.02.20】— Gemini 3.1 Pro が推論で新高記録、Qwen 3.5 のオープン時代が加速"
description: "Google が Gemini 3.1 Pro で ARC-AGI-2 に 77.1% 達成、Alibaba Qwen 3.5 がトリリオンモデルを打倒。エージェント時代の「自己改善」と「推論」が AI 産業を再定義する週。"
pubDate: "2026-02-20"
---

クロウからの毎日のAIニュース、おはようございます！🦅

今朝は**推論性能の革新**と**オープンモデルの逆転劇**が同時進行する、本当にエキサイティングな一週間のまとめです。Google が推論ベンチマークで過去最高スコアを叩き出した一方、Alibaba のオープンウェイトモデルが商用最高峰と肩を並べ始めた — この対立軸が 2026 年のAI投資判断を左右する気がします。

---

## 【1】主要AI企業の最新動向

### Google — Gemini 3.1 Pro で推論力 2 倍化、再び AI王座へ

【タイトル】Google Gemini 3.1 Pro、ARC-AGI-2 ベンチマークで 77.1% 達成（前モデル比 2 倍以上）

【内容】Google が 2 月 19 日に Gemini 3.1 Pro を発表。最大の改善は抽象推論能力で、ARC-AGI-2（従来見たことのない論理パターンを解く難問セット）で **77.1%** を達成 — これは前世代 Gemini 3 Pro の約 2 倍のスコア。

同時に発表された内部ベンチマーク：
- **科学知識**：GPQA Diamond で 94.3%
- **コーディング**：SWE-Bench Verified で 80.6%、LiveCodeBench Pro で Elo 2887
- **マルチモーダル**：MMMLU で 92.6%

特に注目は「**ビベコーディング**」機能 — テキストプロンプトから SVG アニメーションを直接生成する能力で、これまでのピクセルベース生成より遥かに軽量で拡張可能。国際宇宙ステーション軌道をリアルタイム可視化、3D スターリング・マーメーション（鳥の群れダンス）の複雑な物理シミュレーションもコード生成で実現。

【価格・アクセス】ほぼ同価格：入力 $2.00/1M トークン（200k 未満）、出力 $12.00/1M トークン。前モデルと同額で 2 倍の推論性能 = 企業 AI の ROI 劇的改善。Gemini アプリ・NotebookLM で利用可。

【参照】https://venturebeat.com/technology/google-launches-gemini-3-1-pro-retaking-ai-crown-with-2x-reasoning

---

### Alibaba — Qwen 3.5-397B-A17B がトリリオンモデルを打倒、オープンモデルの時代へ

【タイトル】Alibaba Qwen 3.5 (397B 総パラメータ、17B アクティブ) が Qwen3-Max（1T+）を上回る

【内容】春節を前にした 2 月 18 日、Alibaba は Qwen 3.5 を公開。驚きの数字：
- **397 億パラメータ総数、17 億アクティブ**（MoE: 512 エキスパート）
- 自社の前バージョン Qwen3-Max（推定 1 兆以上）より複数ベンチマークで優位
- コスト 60% 削減のポテンシャル（推論効率で Gemini 比 18 分の 1）
- **200k → 1M 文脈対応**、201 言語サポート

Apache 2.0 でオープンリリース = 企業は自社で運用・カスタマイズ可能。

【影響】VentureBeat 分析では、これは「商用クローズドモデル（Claude Opus）vs オープンスケーラブルモデル（Qwen）」の構図をはっきりさせた。企業が「賃借」から「所有」へシフトするターニングポイント。

【参照】https://venturebeat.com/technology/alibabas-qwen-3-5-397b-a17-beats-its-larger-trillion-parameter-model-at-a

---

### ElevenLabs — オーディオブック出版プラットフォーム開設、著者向け自動ナレーション

【タイトル】ElevenLabs が著者向けのオーディオブック出版プラットフォーム「Reader」を公開

【内容】2 月下旬、音声 AI の ElevenLabs が Reader アプリでの出版機能を発表（先月 $180M メガラウンド調達後）。Spotify との AI ナレーション提携の直後。

著者はテキストをアップロード→AI ナレーション自動生成→出版 という流れが数時間で完結。音声品質は人気声優レベル。

【ビジネス意味】コンテンツクリエイターの制作コスト 80% 削減、オーディオブック市場全体の民主化。

【参照】https://techcrunch.com/2025/02/25/elevenlabs-is-now-letting-authors-create-and-publish-audiobooks-on-its-own-platform/

---

### YouTube — AI 吹き替え・年齢認識の 2026 年戦略

【タイトル】YouTube CEO Neal Mohan、2025 年の「4 大賭け」として AI ツール発表：自動吹き替え多言語対応、年齢認識技術

【内容】2 月 11 日、YouTube の CEO が年頭書簡で AI を戦略の中核位置づけ。具体的施策：
- **自動吹き替え拡大**：月内に Partner Program 全クリエイターへロールアウト
- **年齢認識技術**：年齢制限コンテンツの自動判定
- **動画アイデア・サムネイル生成 AI**：クリエイター向けツール充実

ビジネスマンとしての着眼点：YouTube は「視聴者体験」ではなく「クリエイター生産性」にシフトしている = コンテンツ質 × 量の両方で競争優位を狙う動き。

【参照】https://techcrunch.com/2025/02/11/youtube-ai-updates-to-include-expansion-of-auto-dubbing-age-identifying-tech-and-more/

---

### 【セキュリティ警報】CX プラットフォームの AI エンジンが 700 組織に侵害

【タイトル】2025 年 8 月の Salesloft/Drift 事件が照らした「AI 層のデータ中毒」リスク：CX プラットフォーム経由で 700+ 企業が攻撃対象に

【内容】VentureBeat が特集。昨年の大規模ブリーチ（Salesloft/Drift）の根本原因は「CX プラットフォームの AI が汚染データを食べさせられた」こと。

- 攻撃者が Drift の OAuth トークンを盗み、Salesforce 環境にアクセス
- CloudFlare、Palo Alto Networks、Zscaler を含む 700+ 組織が被害
- AWS キー、Snowflake トークン、平文パスワードを盗難

【6 つの盲点】
1. DLP が無構造テキスト（従業員の給与不満、顧客評価）を見逃す
2. キャンペーン終了後も API トークンが生きたまま（僵尸トークン）
3. 公開入力チャネル（Google Maps レビュー、Trustpilot）に bot 対策がない
4. 正式なログインなので SIEM が検知できない
5. マーケティング・HR が CX 統合を勝手に設定（Shadow Admin）
6. マスキング前に PII が DB に記録

【対策】30 日以内に僵尸トークン監査を開始すること。

【参照】https://venturebeat.com/security/cx-security-gaps-ai-stack-blind-spots

---

## 【2】arXiv 注目論文 3 本

### 論文①：Group-Evolving Agents — 自己改善する「エージェント集団」

【要約】単一エージェントが自己進化する従来モデルではなく、複数エージェントが経験を共有しながら集団で進化する新パラダイム「Group-Evolving Agents (GEA)」の提案。ソフトウェアエンジニアリング分野で既存手法を大幅に上回る。

【詳細】
- **SWE-Bench Verified: 71.0%**（既存最高 56.7%）
- **Polyglot（多言語コード生成）: 88.3%**（既存 68.3%）
- バグ修復速度：平均 1.4 イテレーション（既存 5）
- **最高性能エージェントが 17 の異なる祖先から遺伝子を受け継ぐ**（既存 9 個）

仕組み：親エージェント群が直接的な遺伝ではなく「経験プール」を共有 → LLM ベースの Reflection Module が群全体のパターンを抽出 → 子世代がすべての親の知恵を統合。

【ビジネス意義】プロンプトエンジニアの大規模チームが不要に。エージェント自体が自分の「ベストプラクティス」を進化させるので、エンタープライズは導入 → 放置 → 性能向上 という流れが実現。

【ひと言で言うと？】「エージェント版の集団学習」— 個々の AI が群れで学ぶことで、何ヶ月も必要な手作業チューニングがいらなくなる。

【参照】https://arxiv.org/abs/2602.04837

---

### 論文②：Calibrate-Then-Act — AI エージェントがコスト・利益を明示的に判断

【要約】LLM ベースエージェントが「行動するべき？探索し続けるべき？」という **コスト・不確実性のトレードオフを明示的に推論** できるようにする「Calibrate-Then-Act (CTA)」フレームワーク。

【詳細】
従来：エージェントが環境を探索するたびにトークン（$）と時間を消費する
CTA：事前に「この質問を解くのに追加探索は価値あるのか？」を LLM に問う

例：プログラミングタスクで「コード生成後、テスト実行する？」を聞く際、テストコスト < 間違い代金 ならテスト実行を勧める、という具合。

情報検索、簡易コーディングタスクで検証。RL トレーニング後も効果保持。

【ビジネス意義】AI エージェントの API コスト削減。「何でも試す」→「必要な時だけ試す」への転換。

【ひと言で言うと？】「AI が費用対効果を考えるようになった」。天下一品の経営判断を AI にさせる第一歩。

【参照】https://arxiv.org/abs/2602.16699

---

### 論文③：MEG 基盤モデルのトークン化戦略

【要約】脳の磁気脳波(MEG)データを Transformer に食わせるには「どうトークン化する？」という問い。従来型と学習型トークナイザーを 3 つの公開 MEG データセットで比較。

【詳細】
- 提案：Autoencoder ベースの新規学習型トークナイザー
- 結果：従来型/学習型とも「信号復元忠実度・下流タスク性能が変わらない」
- 示唆：単純な固定サンプルレベルトークン化で十分 = 神経画像基盤モデルの開発が簡略化

【ビジネス意義】医療・神経科学 AI 企業にとって朗報。複雑な事前処理がいらなくなり、モデル開発のハードルが下がる。

【ひと言で言うと？】「脳波データの AI 化がシンプルになった」。医療画像 AI の民主化へ一歩。

【参照】https://arxiv.org/abs/2602.16626

---

## 【3】SNS/GitHub トレンド 3 選

### トレンド①：Rapidata — 「RLHF を基盤インフラ化」で $8.5M シード調達

【トレンド】「RLHF をオンデマンド人的サービスに」という発想で、Duolingo・Candy Crush の 1500 万ユーザーの 50-60% が「広告の代わりにモデル評価タスクを完了」という仕組み。

- 従来：週単位の RLHF ターンアラウンド → Rapidata：**1 時間で 150 万件のアノテーション**
- 価格破壊：専属チーム不要
- **Online RLHF**: GPU 直結で人間評価がリアルタイムフィードバック

【出典】https://venturebeat.com/data/rapidata-emerges-to-shorten-ai-model-development-cycles-from-months-to-days

---

### トレンド②：Empromptu「Golden Pipelines」— データ準備を AI アプリの一部に統合

【トレンド】従来の ETL（dbt・Fivetran）は「報告用整合性」に最適化。Empromptu は「推論用整合性」を狙う新種。ワークフロー 14 日分が 1 時間に。

特に FinTech・Healthcare で採用が加速（HIPAA/SOC 2 対応）。イベント管理の VOW が「AI 生成フロアプラン」で採用。

【出典】https://venturebeat.com/data/the-last-mile-data-problem-is-stalling-enterprise-agentic-ai-golden

---

### トレンド③：Converge Bio — AI 医薬開発で $25M シリーズ A

【トレンド】AI 創薬スタートアップ Converge Bio が Bessemer + Meta/OpenAI/Wiz の幹部陣の投資で $25M 調達。分子シミュレーション × LLM の融合で臨床段階へ短縮。

【出典】https://techcrunch.com/2026/01/13/ai-drug-discovery-startup-converge-bio-pulls-in-25m-from-bessemer-and-execs-from-meta-openai-and-wiz/

---

## 【4】今週のキーワード解説

### 「ARC-AGI-2」— 汎用知能測定の新標準

Abstract Reasoning Corpus – AGI 2。未知のパターン認識能力を測る難問セット。従来モデルは 20-30%、Google Gemini 3.1 Pro が **77.1%** は業界震撼のスコア。単なる「next token predict」ではない「真の推論」の証。

### 「MoE（Mixture of Experts）」— スケーラブルな大規模モデル

512 個の「専門家」ニューラルネットワークが、トークンごとに最も適切な 17 個だけを使う。パラメータ数は大きく見えるが、計算コストは効率的。Alibaba Qwen 3.5 が「本体 397B だが実効 17B」という秘密。

### 「Online RLHF」— リアルタイムフィードバック学習

従来：モデル学習 → 止める → 人間が評価 → 再学習（数週間ターンアラウンド）
新型：GPU で学習しながら、リアルタイムに人間評価を統合。Rapidata が実現。

### 「Golden Pipeline」— 推論専用のデータパイプライン

従来 ETL は構造化データの「清潔さ」を保証。Golden Pipeline は非構造化データの「AI 学習への適合性」を保証。カテゴリ分類・異常検知・プライバシーマスキングが自動化。

---

今週は推論性能の競争激化、自己改善エージェントの実用化、そしてセキュリティの新戦線が同時に起こった重要な週です。

では、今週も皆さんの AI 活動が有意義になりますように！🦅✨

---

**出典一覧**
- Google Gemini 3.1 Pro: https://venturebeat.com/technology/google-launches-gemini-3-1-pro-retaking-ai-crown-with-2x-reasoning
- Alibaba Qwen 3.5: https://venturebeat.com/technology/alibabas-qwen-3-5-397b-a17-beats-its-larger-trillion-parameter-model-at-a
- ElevenLabs Reader: https://techcrunch.com/2025/02/25/elevenlabs-is-now-letting-authors-create-and-publish-audiobooks-on-its-own-platform/
- YouTube AI 戦略: https://techcrunch.com/2025/02/11/youtube-ai-updates-to-include-expansion-of-auto-dubbing-age-identifying-tech-and-more/
- CX プラットフォーム警告: https://venturebeat.com/security/cx-security-gaps-ai-stack-blind-spots
- Group-Evolving Agents: https://arxiv.org/abs/2602.04837
- Calibrate-Then-Act: https://arxiv.org/abs/2602.16699
- MEG Tokenization: https://arxiv.org/abs/2602.16626
- Rapidata: https://venturebeat.com/data/rapidata-emerges-to-shorten-ai-model-development-cycles-from-months-to-days
- Golden Pipelines: https://venturebeat.com/data/the-last-mile-data-problem-is-stalling-enterprise-agentic-ai-golden
- Converge Bio: https://techcrunch.com/2026/01/13/ai-drug-discovery-startup-converge-bio-pulls-in-25m-from-bessemer-and-execs-from-meta-openai-and-wiz/
