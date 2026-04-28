# Custom Domain Setup

The intended domain is `credencing.com`. The repository already includes `public/CNAME` with this domain, so the GitHub Pages artifact is ready. DNS must still be pointed at GitHub Pages from Namecheap.

To activate the custom domain safely:

1. In Namecheap, open **Domain -> Advanced DNS**.
2. Remove conflicting default records for `@` and `www`, especially Namecheap parking, URL redirect, or old A records.
3. Add these apex records:
   - Type: `A Record`, Host: `@`, Value: `185.199.108.153`, TTL: `Automatic`
   - Type: `A Record`, Host: `@`, Value: `185.199.109.153`, TTL: `Automatic`
   - Type: `A Record`, Host: `@`, Value: `185.199.110.153`, TTL: `Automatic`
   - Type: `A Record`, Host: `@`, Value: `185.199.111.153`, TTL: `Automatic`
4. Add the `www` record:
   - Type: `CNAME Record`, Host: `www`, Value: `philstilwell.github.io`, TTL: `Automatic`
5. In the GitHub repository, open **Settings -> Pages**.
6. Confirm the custom domain is `credencing.com`.
7. Wait for DNS verification, then enable **Enforce HTTPS**.

The repository CNAME file should contain:

```text
credencing.com
```

Until DNS propagates, the fallback public URL remains:

https://philstilwell.github.io/Credencing/
