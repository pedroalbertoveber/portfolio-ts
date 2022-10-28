import { IFilter } from 'interface/Filter';
import allfilters from 'data/filters.json';
import React, { ReactElement, useState, useEffect } from 'react';
import styles from './Filter.module.scss';

interface Props {
  filter: IFilter,
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>,
}

const Filter = ({ filter, setFilter }: Props ):ReactElement => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ filterList, setFilterList ] = useState<IFilter[]>([]);

  const handleCurrentFilter = ( newFilter :IFilter): void =>  {
    setIsOpen(false);
    setFilter(newFilter);
  };

  useEffect(() => {
    setFilterList(allfilters);
  }, []);

  return (
    <div className={styles.filterBackground}>
      <div className={styles.filterContainer}>
        <div className={styles.filterMode}>Linguagem utilizada</div>
      </div>
      <div className={styles.optionContainer}>
          {isOpen ? 
          filterList.map(item => (

            <div 
            key={item.id} 
            className={styles.option} 
            onClick={() => handleCurrentFilter(item)}>
              {item.displayName}
            </div>

             )) : (
            <div className={styles.filter} onClick={() => setIsOpen(true)}>{ filter.displayName }</div>
            )
          }
      </div>
    </div>
  );
};

export default Filter;