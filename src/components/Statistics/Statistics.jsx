import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const Statistics = (props) => {
    const { title, stats } = props;
    // const bckg = ["red", "green", "yellow", "blue", "purple"];

    return (
        <Styled.Container>
            <Styled.Section>
                {title &&
                    <Styled.Title>
                        {title}
                    </Styled.Title>
                }
                <Styled.StatList>
                    {stats.map((item, index) => (
                        // <Styled.StatItem key={item.id} bckg={bckg[index]}>
                        <Styled.StatItem
                            key={item.id}
                            bckg={`rgb(${getRandomInt(0, 255)}, 
                            ${getRandomInt(0, 255)}, 
                            ${getRandomInt(0, 255)}, 
                            ${0.8})`
                            }>
                            <Styled.StatLabel>
                                {item.label}
                            </Styled.StatLabel>
                            <Styled.StatPercentage>
                                {item.percentage}%
                            </Styled.StatPercentage>
                        </Styled.StatItem>
                    ))}
                </Styled.StatList>
            </Styled.Section>
        </Styled.Container>
    )
};

Statistics.defaultProps = {
    title: 'Statistic Data'
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
};

export default Statistics;
