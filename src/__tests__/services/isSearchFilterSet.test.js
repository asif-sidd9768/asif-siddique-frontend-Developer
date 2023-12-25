import { isSearchFilterSet } from "../../services/isSearchFilterSet";


describe('isSearchFilterSet', () => {
  it('returns false when all values in searchFilter are null', () => {
    const searchFilter = {
      landings: null,
      status: null,
      type: null
    }

    const result = isSearchFilterSet(searchFilter);

    expect(result).toBe(false);
  });

  it('returns true when at least one value in searchFilter is not null', () => {
    const searchFilter = {
      landings: null,
      status: 'active',
      type: null
    }

    const result = isSearchFilterSet(searchFilter);

    expect(result).toBe(true);
  });
});
