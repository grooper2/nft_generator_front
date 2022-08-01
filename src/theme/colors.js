const mapColours = (first, second, third, fourth, fifth) => ({
    100: first,
    80: second,
    60: third,
    40: fourth,
    20: fifth,
  });
  
  const primary = {
    blue: mapColours("#546478", "#5C6E84", "#647890", "#6F829B", "#7B8DA3")
  };
  
  const secondary = {
    purple: mapColours("#554971", "#5D507C", "#665889", "#6F5F95", "#7A6AA0"),
    cyan: mapColours("#5FB1BF","#6DB8C5", "#7CBFCB", "#8AC6D0","#99CDD6" ),
    red: mapColours("#A42D2D","#C03535", "#CA3F3F", "#CF4F4F","#D35F5F" )
  };
  
  export const colors = {...primary, ...secondary}