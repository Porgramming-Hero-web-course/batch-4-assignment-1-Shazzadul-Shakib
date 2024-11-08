### The significance of union and intersection types in Typescript

Union and intersection types are powerful and important features in Typescript. They help us to define more accurate types explicitly for the functions or variables.They allow us to combine different types in ways that can provide greater clarity and safety in our code.

## Union types

Union types allow us to write multiple types explicitly that the variable's type could be.This is useful when a variable can be one of several types, and we want to handle each type accordingly.

Example:

```bash
let variable: string | number;

variable = "Hi";  // valid
variable = 20;       // valid
variable = true;     // Error: 'true' is not assignable to 'string | number'
```

In this example, variable can be string or number . We have declare the types of the variable expicitely by union types.

## Intersection types

Intersection types allow us to combine multiple types into one that the variable's type could be. It ensures that the variable can have all the combined types.This is helpful when we need to merge the properties or behaviors of multiple types into one entity.

```bash
type Person ={
name: string;
email:string;
}

type Student ={
id: string;
}

type StudentPerson= Student & Person;

const studentPerson:StudentPerson  = {
id: "1122",
name: "Shakib",
email: "shakib@gmail.com"
}
```

Here in this example, StudentPerson is a combined type of Person and Student. It has all the type of both individual type. Intersection types are great when we want to create more complex types that include features from multiple sources.

## When to use Union types and Intersection types

- Union Types: When a value can be different type either it's number or string or boolean or null or undefined , we don't know exactly and want to handle them explicitly then we use Union types.
- Intersection Types: When we want a value to have the properties of multiple types at the same time. This is useful when merging behaviors or creating complex objects with properties from multiple sources.

Both features are important to write flexible, clean, and type-safe TypeScript code. By using them we can easily counter the bugs in our development process.


<!-- https://github.com/Porgramming-Hero-web-course/batch-4-assignment-1-Shazzadul-Shakib -->