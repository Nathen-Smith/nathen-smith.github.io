## Want to use this as a template?

1. Install <a href="https://git-scm.com/">git</a>, <a href="https://nodejs.org/en/">Node.js</a>, and <a href="https://classic.yarnpkg.com/en/docs/install/#windows-stable">Yarn</a>. 

2. Make an empty public repository of the name `<GITHUB_USERNAME>.github.io.git`. The username should be in lowercase.
3. Clone the repository: ```git clone https://github.com/Nathen-Smith/nathen-smith.github.io.git my-website```
4. Change ```homepage``` field in ```web/package.json``` to match your github username.

5. Change CNAME if you have bought a domain, homepage in `package.json`. Or remove it for now.

6. Push the repository to your own GitHub
```
git remote rm origin
git remote add origin <GITHUB_USERNAME>.github.io.git
git branch -M main
git push -u origin main
```
7. Go to the Pages section in Settings of the repo, and set the source branch to ```gh-pages```.

## Development

1. Run the app locally
```
cd web/
yarn
yarn start
```

2. Start making modifications to `constants/index.js`

## Customization

Q: How to change the position indicator color on web mode?
A: Change classnames <a href="https://github.com/Nathen-Smith/nathen-smith.github.io/blob/46f2304c6e79b5074a0fa9df43fdb72aff933383/web/src/App.jsx#L142-L146">here</a>

Q: How to change column layout?
A: Go to ```/Web/src/Layout.tsx```, make changes to the amount of grids, the divs with ids, etc.
