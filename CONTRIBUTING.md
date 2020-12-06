
# Contributing To The Jantick Discord Bot
When contributing to this repository, please first discuss the change you wish to make via issue, or on the Jantick Technologies[Discord server](https://discord.gg/srZ5BzJaRH) or any other method with the owner(s)/dev-ops team of this repository before making a change.

Note that we also have a [code of conduct](CODE_OF_CONDUCT.md)

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the [CHANGELOG.md](CHANGELOG.MD) (and other relevant files) with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.


**WARNING** Please don't publish the `.env` file anywhere as it contains sensitive information that can compromise your bot. This file is already in the .gitignore, but make sure it is also in yours. We're not responsible for any damage done to you or your bot.

## Code structure
When contributing code, make sure that your code matches the prefered way of writing it.

Example file/script:
```js
const  BaseCommand  =  require('../../utils/structures/BaseCommand');

module.exports  =  class  <CommandName>Command  extends  BaseCommand {
constructor() {
super('command-name', 'command-category', []);
}
async  run(client, message, args) {
   
   // Code here

	}
}

```

And aside from the file/script itself please make sure that you name the file accordingly as shown below:

`<CommandName>Command.js`

You can also find the sample script in [sample.filestructure.js](https://github.com/Jantick/jantick-discord-bot/sample.filestructure.js)

## Issues
In the [issues section](https://github.com/Jantick/jantick-discord-bto/issues), you can create issues of features you want added, bugs that need to be fixed or something wrong.


## Comprehensive guide on contributing
Before you even begin working on fixes or features you have to fork the repository as you cannot directly work on this one.

#### Adding new features / bug fixing
You should branch off from the dev/test branch:

Then you should do all the new work in that branch. Then merge that branch back into the dev/test branch.
After you merged the branch back into the dev branch you should do a pull request on the dev branch in THIS repository. After that, we will review it and merge it with our main branch.
