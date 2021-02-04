const component = ({ titleCaseName }) => (`\
import styled from 'styled-components';

const Container = styled.div\`\`;

const ${titleCaseName} = () => (
  <Container>
    ${titleCaseName} component!
  </Container>
);

export default ${titleCaseName};
`);

const test = ({ dashCase, titleCaseName }) => (`\
import { render, screen } from '@testing-library/react';
import ${titleCaseName} from './${dashCase}.component';

describe('${titleCaseName}', () => {
  it('renders', () => {
    render(<${titleCaseName}/>);
    expect(screen.getByText('${titleCaseName} component!')).toBeInTheDocument();
  });
});
`);

module.exports = {
  component,
  test,
};
