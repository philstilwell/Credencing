# Custom Domain Setup

The intended domain is `credencing.org`, but DNS is not currently pointed at GitHub Pages.

To activate the custom domain safely:

1. In your domain registrar, point the apex domain to GitHub Pages:
   - `A 185.199.108.153`
   - `A 185.199.109.153`
   - `A 185.199.110.153`
   - `A 185.199.111.153`
2. Point `www` to GitHub Pages:
   - `CNAME philstilwell.github.io`
3. In the GitHub repository, open **Settings -> Pages**.
4. Set the custom domain to `credencing.org`.
5. Wait for DNS verification, then enable **Enforce HTTPS**.
6. After verification, add a `public/CNAME` file containing:

```text
credencing.org
```

Until DNS is configured, the stable public URL remains:

https://philstilwell.github.io/Credencing/
