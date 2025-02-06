# JoesRobotShop

This is the demo project for Pluralsight's Angular Services course.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Notes : 

// an angular service is at its heart just a class -oversimpliofied definition

// to create a servie we create a class and mark it as injectable then inject your service into where you want it.

// what is an observable:
Observables: Observables are a way to handle asynchronous data in Angular. They emit values over time, and components can subscribe to them to receive these values.

// an RXJS observable is a stream of data where values are emitted over time, anyone who wants to use that data becomes a subscriber to the observable.

// What are signals:
it allows Angular to track how data is changing in an application, its purpose is an improvement in the way change detection works in Angular, making it more efficient for Angular to keep the UI rendering consistent with the underlying data change.
Example of signals: let counter = signal(0); instead of setting it like counter = 1, you would use counter.set(1). after you import it in your component like so : import { signal } from '@angular/core'; you can use it like so : let counter = signal. if you call counter.set(1) it will trigger a change detection cycle. and if you console.log(counter()); it will return the current value of the counter/ 1.
now if you wanted to update counter you would call counter.update((oldValue) => oldValue + 1); this will return the new value of the counter which is 2. 

// what is dependecy injection : 
dependency injection is a design pattern which prescribes passing into a class any dependencies that it needs rather than letting the class itself create those dependencies.
with dependency injection, you can easily swap out one implementation of a dependency for another, without having to change.
For example, consider this ProductComponent class, which is responsible for displaying information about products from our database. Let's assume this app is not a web application so it's going to be working directly with the database. And we want to delegate all of the responsibility of working with the database to services. For example, we may have a ProductRepository class that is responsible for fetching and updating products in the database. This means that the ProductComponent needs an instance of the ProductRepository. With dependency injection, instead of creating the ProductRepository class ourselves, we take in the ProductRepository as a parameter in the constructor and then store that in a local field for use within the ProductComponent class.

//what are Providers and Injectors: 
text book definition:  providers and injectors actually work together to create instances of services in our application. Essentially, providers are a set of instructions that define how to create a service, and injectors are actual instances of an Angular injector class, which actually do the work of creating the instances of your services, including handling when and where to create them

My own words: in other words, providers are the blueprint for creating a service, and injectors are the actual factory

his words:  providers are instructions that define how to create a service and injectors define when and where and how many of those services to create.

you can use Interfaces for your dependecies but you have to use custom injection tokens

Deps is way to define dependecies that this provider needs to inject into the service that its providing.

Injectors resolve dependecies and iject them into classes or components 

## modifiers
@self modifier says that this dependecy must be provided by this components own providers

@skipSelf says if i have provieded a provider for this component dont use it keep traversign the tree until you find another provider.

@Host refers to the element that hosts the current element

@optional modifier says its okay if this dependency/provider is not provided