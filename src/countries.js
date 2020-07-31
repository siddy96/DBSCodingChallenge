type State = {
    options: [{ [string]: string }],
    value: string | void,
  };
  
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });
  export default [
    createOption('Singapore'),
    createOption('Malaysia'),
    createOption('Thailand'),
    createOption('Indonesia'),
    createOption('Phillipines'),
  ];