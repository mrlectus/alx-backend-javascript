const getListStudentIds = (args) => {
  return args.map((value) => value.id);
};
console.log(getListStudentIds("hello"))
