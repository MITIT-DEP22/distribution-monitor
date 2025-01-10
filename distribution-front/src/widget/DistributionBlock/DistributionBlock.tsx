import React, {useEffect} from 'react';
import css from "./DistributionBlock.module.css"
import LayoutContainer from "../../shared/ui/LayoutContainer/LayoutContainer";
import distributionStore from "../../entity/distribution/store/DistributionStore";
import {HashLoader} from "react-spinners";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {RouterNames} from "../../shared/enum/RouterNames";
import CustomLink from "../../feature/CustomLink/CustomLink";
import LoadingSpinner from "../../feature/LoadingSpinner/LoadingSpinner";
import SubTitle from "../../shared/ui/SubTitle/SubTitle";
import releaseYearStore from "../../entity/release-year/store/releaseYearStore";
import militaryBaseStore from "../../entity/military-base/store/MilitaryBaseStore";
import positionStore from "../../entity/position/store/PositionStore";
import regionStore from "../../entity/region/store/regionStore";

const DistributionBlock = observer(() => {

    const {distributions, count, isLoading: distributionIsLoading} = distributionStore
    const {releaseYears, isLoading: releaseYearsIsLoading} = releaseYearStore
    const {militaryBases, isLoading: militaryBasesIsLoading} = militaryBaseStore
    const {topPositions, isLoading: positionsIsLoading} = positionStore
    const {regions, isLoading: regionsIsLoading} = regionStore

    useEffect(() => {
        positionStore.getTopPositions()
        distributionStore.getCountDistributions()
    }, []);

    return (
        <div className={css.container}>
            <LayoutContainer span={5}>
                {distributionIsLoading ? <LoadingSpinner/> :
                    <>
                        <SubTitle value={"Випускники"}/>
                        <div className={css.graduatesContainer}>
                            <div className={css.textContent}>
                                К-ть в базі: {count}
                            </div>
                            <CustomLink to={RouterNames.DISTRIBUTIONS_TABLE} text={"До таблиці"}/>

                            <div className={css.textContent}>
                                Загальні діаграми
                            </div>
                            <CustomLink to={RouterNames.DISTRIBUTIONS_DIAGRAM} text={"До діаграм"}/>
                        </div>
                    </>
                }
            </LayoutContainer>

            <LayoutContainer span={3}>
                {releaseYearsIsLoading ? <LoadingSpinner/> :
                    <>
                        <SubTitle value={"Роки випуску"}/>
                        <div className={css.yearsContainer}>
                            {releaseYears.map(item => (
                                <CustomLink
                                    to={`${RouterNames.DISTRIBUTIONS_TABLE_BY_YEAR}/${item.id}`}>{item.releaseYear}</CustomLink>
                            ))
                            }
                        </div>
                    </>
                }
            </LayoutContainer>

            <LayoutContainer span={5}>
                {positionsIsLoading ? <LoadingSpinner/> :
                    <>
                        <SubTitle value={"ТОП посад"}/>
                        <ol type={"1"} className={css.positionsContainer}>
                            {topPositions.map(item => (
                                <li>
                                    <CustomLink
                                        to={`${RouterNames.DISTRIBUTIONS_TABLE_BY_POSITION}/${item.id}`}>{item.position}</CustomLink>
                                </li>
                            ))
                            }
                        </ol>
                    </>
                }
            </LayoutContainer>


            <LayoutContainer span={7}>
                {militaryBasesIsLoading ? <LoadingSpinner/> :
                    <>
                        <SubTitle value={"Військові частини"}/>
                        <div className={css.militaryBasesContainer}>
                            {militaryBases.map(item => (
                                <CustomLink
                                    to={`${RouterNames.DISTRIBUTIONS_TABLE_BY_MILITARY_BASE}/${item.id}`}>{item.name}</CustomLink>
                            ))
                            }
                        </div>
                    </>
                }
            </LayoutContainer>
            <LayoutContainer span={7}>
                {regionsIsLoading ? <LoadingSpinner/> :
                    <>
                        <SubTitle value={"Регіони"}/>
                        <div className={css.regionsContainer}>
                            {regions.map(item => (
                                <CustomLink className={css.link}
                                            to={`${RouterNames.DISTRIBUTIONS_TABLE_BY_REGION}/${item.id}`}>{item.name} {item.city_type} {item.city_name}
                                </CustomLink>
                            ))
                            }
                        </div>
                    </>
                }
            </LayoutContainer>


        </div>
    );
});

export default DistributionBlock;