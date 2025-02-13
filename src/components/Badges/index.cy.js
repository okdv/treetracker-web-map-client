import Badges from '.';
import { mountWithTheme as mount } from '../../models/test-utils';

describe('CustomWorldMap', () => {
  it('renders unverified and without token badge correctly', () => {
    mount(<Badges tokenId={null} verified={false} />);
  });

  it('renders verfied and with token badge correctly', () => {
    mount(<Badges tokenId="asdf" verified />);
  });
});
