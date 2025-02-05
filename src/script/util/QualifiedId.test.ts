import {matchQualifiedIds} from './QualifiedId';

describe('QualifiedId util', () => {
  describe('matchQualifiedIds', () => {
    it.each([
      [
        {domain: '', id: '1', stuff: 'extra'},
        {domain: '', id: '1', property: 1},
      ],
      [
        {domain: 'wire.com', id: '1', other: 12},
        {domain: 'wire.com', id: '1'},
      ],
      [
        {domain: 'bella.wire.link', id: '1', prop: ''},
        {default: '', domain: 'bella.wire.link', id: '1'},
      ],
    ])('match entities that have similar ids (%s, %s)', (entity1, entity2) => {
      expect(matchQualifiedIds(entity1, entity2)).toBe(true);
    });

    it.each([
      [
        {domain: '', id: '1', stuff: 'extra'},
        {domain: 'wire.com', id: '1', property: 1},
      ],
      [
        {domain: 'wire.com', id: '1', other: 12},
        {domain: '', id: '1'},
      ],
    ])('only matches ids if one domain is empty (%s, %s)', (entity1, entity2) => {
      expect(matchQualifiedIds(entity1, entity2)).toBe(true);
    });

    it.each([
      [
        {domain: 'wire.com', id: '1'},
        {domain: 'wire.com', id: '2'},
      ],
      [
        {domain: 'bella.wire.link', id: '1'},
        {domain: 'wire.com', id: '1'},
      ],
    ])('does not match entities that have different ids (%s, %s)', (entity1, entity2) => {
      expect(matchQualifiedIds(entity1, entity2)).toBe(false);
    });
  });
});
