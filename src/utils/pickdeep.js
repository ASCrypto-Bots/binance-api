export default (obj, fieldList, otherwise) => fieldList.reduce((res, field) => res && res[field], obj) || otherwise;
