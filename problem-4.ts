type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  height: number;
  width: number;
};

type ShapeAreaParam = Circle | Rectangle;

const calculateShapeArea = (param: ShapeAreaParam): number | undefined => {
  if (param.shape === "circle") {
    return parseFloat((Math.PI * param.radius * param.radius).toFixed(2));
  } else if (param.shape === "rectangle") {
    return parseFloat((param.height * param.width).toFixed(2));
  }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(circleArea);
