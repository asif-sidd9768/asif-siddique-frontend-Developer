export const fetchOneCapsuleData = async (capsuleSerial) => {
  const url = `https://api.spacexdata.com/v3/capsules/${capsuleSerial}`;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  try {
    const response = await fetch(url, requestOptions);   
    const capsuleData = await response.json();
    return capsuleData
  } catch (error) {
    console.log('error', error);
  }
}