import { Box, Button } from "@mui/material";
import { useAddPolicyholderMutation } from "../../api/policyholders/mutations/useAddPolicyholderMutation";
import { usePolicyholdersQuery } from "../../api/policyholders/queries/usePolicyholdersQuery";
import { MOCK_NEW_POLICY_HOLDER } from "../../constants/mockData";
import { TABLE_HEADERS } from "../../constants/verbiage";
import { getPolicyholderTableRows} from "../../utils/policyholdersViewUtils";
import InfoTable from "../InfoTable";

const PolicyholdersView = () => {
    const { status, data: policyholders } = usePolicyholdersQuery();
    const {status: mutateStatus, mutate, data: addedPolicyholders, } = useAddPolicyholderMutation();
    
    if( status === 'loading' ) return <div>Loading...</div>

    if( status === 'error' ) return <div>There has been an error!</div>
    
    const originalPolicyholderRows = getPolicyholderTableRows(policyholders?.policyHolders);
    const addedPolicyholdersRows = getPolicyholderTableRows(addedPolicyholders?.policyHolders);
    const policyholdersTableRows = addedPolicyholdersRows.length ? addedPolicyholdersRows : originalPolicyholderRows;
    
    return (
        <Box sx={{ textAlign: 'center' }}>
            {policyholdersTableRows.map((row, i) => <InfoTable sx={{marginBottom: '16px'}} key={i} header={TABLE_HEADERS.POLICYHOLDER} rows={row} />)}
            <Button
                onClick={() => mutate(MOCK_NEW_POLICY_HOLDER)}
                variant="contained"
                color="primary"
                size="large"
                sx={{marginTop: '16px'}}
                disabled={mutateStatus === 'loading'}
            >
                Add a Policyholder
            </Button>
        </Box>
    )
}

/** Challenge 9 - Write TODOs
 * Error/Success handling: A toast system on user interaction in regards to adding a policyholder
 * Test the toast system
 * Test the Add a placeholder functionality
 * Implement code splitting at the route level
 */


export default PolicyholdersView;