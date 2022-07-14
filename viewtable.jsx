<tbody>
                {
                  this.state.rows.map(data => (
                    <tr>
                      {Object.entries(data).map(([name, value]) => {
                        if (name !== 'atr_id' && name !== 'ato_color') {
                          if (data.color !== 'null' || data.color !== '') {
                            return (
                              <td key={name} style={{ background: `${data.ato_color}` }}>{value}</td>
                            );
                          } else {
                            return (
                              <td key={name} style={{ background: '#ffffff' }}>{value}</td>
                            );
                          }
                        }

                        if (name === 'ato_color') {
                          return '';
                        }

                        if (name === primaryKey) {
                          return '';
                        }
                        
                        if (name.toLowerCase().includes('date')) {
                          if (value === 'null' || value === null || value === '') {
                            return (
                              <td />);
                          } else {
                            return (
                              <td style={{ width: '100px' }}>{moment(value).format('DD/MM/YYYY')}</td>);
                          }
                        }
                        return (<td key={name} >{value}</td>);
                      })
                      }
                    </tr>
                  ))
                  
                }
              </tbody>
