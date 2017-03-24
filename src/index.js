import random from "unique-random-array"

export default function({types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        switch (path.node.operator) {
          case "==":
          case "===":
            path.node.operator = "!=="
            break
          
          case "+":
            if (path.node.left.value === 2 && path.node.right.value === 2) {
              path.replaceWith(t.numericLiteral(5))
            } else {
              path.node.operator = "-"
            }
            break

          case "*":
            path.node.operator = "%"
            break

          case "**":
            path.node.operator = "*"
            break
          
          case "%":
            let left = path.node.left
            path.node.left = path.node.right
            path.node.right = left
            break

          default:
            path.node.operator = random(["+", "-", "*", "/", "==", "===", "!=", "!==", "**", "&&", "||", "^", "%"])()
        }
      }
    }
  }
}
