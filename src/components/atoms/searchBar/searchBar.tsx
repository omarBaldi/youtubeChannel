/* eslint-disable */
import { FC } from 'react';
import Styles from './searchBar.module.scss';
import SearchBarProps from './dto';

export const SearchBar: FC<SearchBarProps> = ({
    type,
    currentValue,
    placeHolderText,
    onStartType
}: SearchBarProps) => {
    return (
        <div className={Styles.searchBarWrapper}>
            <input 
                type={type ?? 'text'}
                placeholder={placeHolderText}
                value={currentValue}
                onChange={(e) => onStartType(e.target.value)}
            />
        </div>
    )
}
