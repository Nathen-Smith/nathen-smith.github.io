# https://nathensmith.com/

want to use this as a template?

1. Make an empty public repository of the name `<GITHUB_USERNAME>.github.io.git`. The username should be in lowercase.
2.

```
git clone https://github.com/Nathen-Smith/nathen-smith.github.io.git
```
3. Change ```homepage``` field in ```web/package.json``` to match your github username.

4. Change CNAME if you have bought a domain, homepage in `package.json`. Or remove it for now.

5.
```
git remote rm origin
git remote add origin <GITHUB_USERNAME>.github.io.git
git branch -M main
git push -u origin main
```
6. Go to the Pages section in Settings of the repo, and set the source branch to ```gh-pages```.

7. Start making modifications to `constants/index.js` (and `Layout.jsx` if needed)

## Customization

Q: How to change the position indicator color on web mode?
A: Change classnames <a href="https://github.com/Nathen-Smith/nathen-smith.github.io/blob/46f2304c6e79b5074a0fa9df43fdb72aff933383/web/src/App.jsx#L142-L146">here</a>
