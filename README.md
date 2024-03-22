# MikoNG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.<br>

&#60;nm-splittertab&#62;:<br>
    &nbsp;&nbsp;create new splitted pane.<br>
    &nbsp;&nbsp;Inputs:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[splitHoriz]: boolean, if true, then horizontal splitted pane (column). If false, then vertical (row)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[moveable]: boolean, if false then <nm-tab>s aren't resizeable<br>
&#60;nm-tab&#62;:<br>
    &nbsp;&nbsp;it's necessary the &#60;ng-template&#62;&#60;/ng-template&#62;<br>
    &nbsp;&nbsp;for example:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&#60;nm-tab&#62;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;ng-template&#62;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;your-component&#62;&#60;/your-component&#62;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;/ng-template&#62;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&#60;/nm-tab&#62;<br>
    &nbsp;&nbsp;adding new tab to splitted pane.<br>
    &nbsp;&nbsp;Inputs:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[fixed]: boolean, if true, then size of this pane does'nt resizeable.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[rateSize]: number, the rate of this component. Sum of <nm-tab>'s rateSize is 100%<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if [fixed]=true, then:<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if [rateSize]=0 then this pane is with necessary size. Otherwise, this value is in px.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;[minSize]: number, if it's resizeabe (not fixed), then this value is minimum size in px.<br>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
