This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More
### Explanation

It contains two components to add information and the other one to list that information. Add information page is also used by list information page as a modal to show details of the listed data. Upon saving fields that are required are checked explicitly through the js code and error message is returned when the conditions are not met. Only upon success in the test, the api is called to save the data. The data is displayed in a list page which contains few fields from the total available fields. To view all the data, there is a modal that contains details(same add page with values set to readable only). Each row has its own distinct button to view the details.
#### Packages
##### React alert and React alert template basic
They are used to show alerts when saving data is successful or anytime there is occurrence of error.

##### React bootstrap
It is used to design the page, the input components and the button that add data. The list page includes modal which is a part of this package.

##### React bootstrap table next and React bootstrap table2 paginator
They work in tandem with one another. React bootstrap table is used to show the list of data from the server side in a table format. The table has a paginator which is implemented through the latter package.

##### Serve
This package is used when you are deploying to heroku. Since react projects need to serve static files that are created from the build script, the serve package tells us which file to display when the code is run.

#### CI/CD Pipeline
##### Wercker
It is a continuous delivery platform that runs all the scripts listed in your local wercker.yml code. You can place any scripts you want to run after the code is pushed to github and it runs everything. With the help of this, builds and testing processes and other processes can be automated.
Steps:
1. Go to the wercker website and set up your account. Click on the new application on the dashboard and add your code repo. Github is an option among others. Select the intended repository and it prompts you to add the wercker.yml file to your local code and push it to git if your code lacks it. You can choose your project type to generate a yml file dynamically. For javascript projects, choose nodejs.
2. You are done. Once you push the code on git, the wercker runs automated tasks.

#### Code Quality Check
##### Codeclimate
Codeclimate checks your code for various malpractices including duplicates, complexity and the standard. Once your repo is run through code climate, it gives you a result with "smelly codes", duplicate ones with a maintainability index. You can choose between various filters to check the problem areas in your code.

#### Deployment with heroku
If you have the heroku cli, you can repeat the following steps to deploy.
1. Go to your project folder and open a terminal.
2. Run "heroku create". It creates a remote url and origin for heroku just like a git. 
3. Now you just have to push the code to the origin which is heroku in our case. The command is "git push heroku master"
4. You are done.
5. If you want to rename your app(because heroku gives a random name to your app), you can use "heroku apps: rename NEWNAME" from the project folder.


<!-- You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->

