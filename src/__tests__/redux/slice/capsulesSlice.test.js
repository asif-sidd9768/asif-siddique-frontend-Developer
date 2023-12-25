import capsulesReducer, {
  initialState,
  changePageNumber,
  loadCapsules,
  applyFilters,
  changeLoading,
  resetFilters,
} from '../../../redux/slices/capsulesSlice';

describe('capsulesSlice reducer', () => {
  it('should handle increase of page number', () => {
    const nextPage = initialState.pageNumber + 1
    const nextState = capsulesReducer(initialState, changePageNumber(nextPage));
    expect(nextState.pageNumber).toBe(2);
  });

  it('should handle decrease of page number', () => {
    const nextState = capsulesReducer({...initialState, pageNumber: 2}, changePageNumber(1));
    expect(nextState.pageNumber).toBe(1);
  });

  it('should handle loadCapsules', () => {
    const capsules = [
      {
        "0": {
          "capsule_serial": "C101",
          "capsule_id": "dragon1",
          "status": "retired",
          "original_launch": "2010-12-08T15:43:00.000Z",
          "original_launch_unix": 1291822980,
          "missions": [
            {
              "name": "COTS 1",
              "flight": 7
            }
          ],
          "landings": 1,
          "type": "Dragon 1.0",
          "details": "Reentered after three weeks in orbit",
          "reuse_count": 0
        }
      },
      {
        "1": {
          "capsule_serial": "C102",
          "capsule_id": "dragon1",
          "status": "retired",
          "original_launch": "2012-05-22T07:44:00.000Z",
          "original_launch_unix": 1335944640,
          "missions": [
            {
              "name": "COTS 2",
              "flight": 8
            }
          ],
          "landings": 1,
          "type": "Dragon 1.0",
          "details": "First Dragon spacecraft",
          "reuse_count": 0
        }
      }
    ]
    const totalCapsules = 2
    const payload = {
      capsules,
      totalCapsules
    }
    const nextState = capsulesReducer(initialState, loadCapsules(payload));
    expect(nextState.capsules).toEqual(payload.capsules);
    expect(nextState.totalCapsules).toEqual(payload.totalCapsules);
  });

  it('should handle applyFilters', () => {
    const payload = {
      filterKey: 'status',
      dropdownValue: 'Active',
    };
    const nextState = capsulesReducer(initialState, applyFilters(payload));
    expect(nextState.searchFilter.status).toBe('Active');
  });

  it('should handle changeLoading', () => {
    const nextState = capsulesReducer(initialState, changeLoading(true));
    expect(nextState.loading).toBe(true);
  });

  it('should handle resetFilters', () => {
    const modifiedState = { ...initialState, searchFilter: { status: 'Active' } };
    const nextState = capsulesReducer(modifiedState, resetFilters());
    expect(nextState.searchFilter).toEqual(initialState.searchFilter);
  });
});
