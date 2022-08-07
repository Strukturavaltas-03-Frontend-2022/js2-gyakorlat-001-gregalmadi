const taggedTemplate = (texts, ...values) => {
  return `<em>${texts[0]}</em><strong>${values[0]}</strong><strong>${values[1]}</strong><em>${texts[2]}</em><strong>${values[2]}</strong><em>${texts[3]}</em><strong>${values[3]}</strong><em>${texts[4]}</em>`;
};

export default taggedTemplate;
