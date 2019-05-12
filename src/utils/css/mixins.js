export const centerContent = ({ topMargin = 1 } = {}) => {
  return `
    max-width: 60rem;
    min-width: 15rem;
    width: 100%;
    margin: ${topMargin}rem auto;
  `
}

export const colors = { main: `hsl(266, 63%, 48%)`, mainActive: "#3498DB" }
