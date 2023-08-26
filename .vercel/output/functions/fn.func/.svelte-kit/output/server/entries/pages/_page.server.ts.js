const load = async () => {
  const file = await import("../../chunks/dataset_modelli_italiani.js");
  const dataset = JSON.parse(JSON.stringify(file.default));
  return {
    props: {
      dataset
    }
  };
};
export {
  load
};
