# Calculator Service - Clean Architecture

This service utilizes a clean plugin architecture to enforce separation of concerns and prevent it from being dependent on external frameworks.

## Project Structure

![Clean Architecture](../assets/images/clean-architecture.jpg)

## Features

### Subtraction

Calculate the difference of 2 or more numbers
- [Interface: HTTP Controller](interfaces/controllers/get-difference.ts) - adapter from HTTP to use case
- [Use Case: Subtract](use-cases/subtract.ts) - convert subtrahends to negatives
- [Entity: Sum](entities/sum.ts) - adds negative numbers