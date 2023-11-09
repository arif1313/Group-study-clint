const getFormData = (e) => {
  const formData = {};
  const targets = { ...e.target };

  for (let input in targets) {
    if (targets[input]?.name) {
      formData[targets[input]?.name] = targets[input]?.value;
    }
  }
  return formData;
};

export default getFormData;
