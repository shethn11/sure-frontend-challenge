import InstructionsBar from './InstructionsBar';
import { renderWithProviders } from '../../utils/test';

describe('InstructionsBar', () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  it('should render a "View challenges" button', () => {
    const { getByText } = renderWithProviders(<InstructionsBar {...defaultProps} />);
    expect(getByText('View challenges')).toBeInTheDocument();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const { getByText } = renderWithProviders(<InstructionsBar {...defaultProps} />);
    const instructionButton = getByText('View challenges');
    instructionButton.click();
    expect(defaultProps.onClick).toBeCalledTimes(1);
  });
});
