export const fetchCapsulesData = async (pageNumber=1,pageSize=5) => {
    const offset = (pageNumber - 1) * pageSize
    const url = `https://api.spacexdata.com/v3/capsules?limit=${pageSize}&offset=${offset}`;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    try {
      const response = await fetch(url, requestOptions);
      const totalCapsules = response.headers.get('spacex-api-count')      
      const capsules = await response.json();
      const capsulesData = {
        capsules,
        totalCapsules
      }
      return capsulesData
    } catch (error) {
      console.log('error', error);
    }
  }