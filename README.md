# PayPay Frida Scripts

# これは何？

PayPayアプリの解析を楽に行うた為のFrida Script

# 機能

- エミュレーター検知回避
- v1/config等に必要な*Hash*のhook
- オフライン支払いの関数hook

# 使い方

```bash
frida -U -l hook.js -f jp.ne.paypay.android.app
```

# 注意

PayPay 4.33.2でのみ動作確認済み

# 連絡先

- Discord: qoo.nyan
- Matrix: @qoo.nyan:usesarchbtw.lol