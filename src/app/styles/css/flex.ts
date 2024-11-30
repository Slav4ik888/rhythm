// v.2024-11-29

export const f = {
  display: 'flex'
};

export const fc = {
  ...f,
  flexDirection: 'column'
};

export const fr = {
  ...f,
  flexDirection: 'row'
};

// -----------------------

export const f_c = {
  ...f,
  alignItems: 'center'
};

export const fc_c = {
  ...fc,
  alignItems: 'center'
};

export const fr_c = {
  ...fr,
  alignItems: 'center'
};

export const f_fs = {
  ...f,
  alignItems: 'flex-start'
};

export const f_c_c = {
  ...f_c,
  justifyContent: 'center'
};

export const f__c = {
  ...f,
  justifyContent: 'center'
};

export const f__sb = {
  ...f,
  justifyContent: 'space-between'
};

export const f_c_sb = {
  ...f_c,
  justifyContent: 'space-between'
};

export const f_c_sa = {
  ...f_c,
  justifyContent: 'space-around'
};

export const f_c_fe = {
  ...f_c,
  justifyContent: 'flex-end'
};

export const f_c_l = {
  ...f_c,
  justifyContent: 'left'
};
