import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem 1.75rem; 
    font-size: 25px;
    margin: 1rem 0;
    span{
        width: 30%
    }

`;
const DeleteButton = styled.button`
    background-color:#FF7676;
    outline: none;
    font-size: 25px;
    padding: 5px 76px;
`;

const Source = ({source, deleteSource}) =>{
    return(
        <>
            <Row>
                <span>{source.id}:</span>
                <span>{source.name}</span>
                <span style = {{ marginLeft : 250 }}>{source.email}</span>
                <DeleteButton style={{marginLeft: 70}} onClick={()=>deleteSource(source.id)}>Delete</DeleteButton>
            </Row>
            <hr></hr>
        </>
    )

};
export default Source;