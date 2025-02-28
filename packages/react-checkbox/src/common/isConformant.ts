import { isConformant as baseIsConformant, IsConformantOptions, TestObject } from '@fluentui/react-conformance';
import makeStylesTests from '@fluentui/react-conformance-make-styles';

export function isConformant<TProps = {}>(
  testInfo: Omit<IsConformantOptions<TProps>, 'componentPath'> & { componentPath?: string },
) {
  const defaultOptions: Partial<IsConformantOptions<TProps>> = {
    asPropHandlesRef: true,
    componentPath: module!.parent!.filename.replace('.test', ''),
    extraTests: makeStylesTests as TestObject<TProps>,
    skipAsPropTests: true,
  };

  baseIsConformant(defaultOptions, testInfo);
}
