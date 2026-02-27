import {
  Checkbox,
  FormControl,
  FormGroup,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { addOnsData } from '../../../../data/addOnsData';
import { useForm } from '../../../../hooks';
import type { IAddOn } from '../../../../types/types';
import { StyledBox, StyledFormControlLabel } from './styled';

const AddOns = () => {
  const theme = useTheme();
  const { formData, updateAddOns } = useForm();

  const [selectedLocalAddOns, setSelectedLocalAddOns] = useState<IAddOn[]>(
    formData.selectedAddOns || []
  );

  useEffect(() => {
    if (
      JSON.stringify(formData.selectedAddOns) !==
      JSON.stringify(selectedLocalAddOns)
    ) {
      setSelectedLocalAddOns(formData.selectedAddOns || []);
    }
  }, [formData.selectedAddOns, selectedLocalAddOns]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    addOnObject: IAddOn
  ) => {
    const { checked } = event.target;
    let newSelectedAddOns: IAddOn[];

    if (checked) {
      newSelectedAddOns = [...selectedLocalAddOns, addOnObject];
    } else {
      newSelectedAddOns = selectedLocalAddOns.filter(
        addOn => addOn.name !== addOnObject.name
      );
    }

    setSelectedLocalAddOns(newSelectedAddOns);
    updateAddOns(newSelectedAddOns);
  };

  const isAddOnSelected = (addOnName: string) =>
    selectedLocalAddOns.some(addOn => addOn.name === addOnName);

  return (
    <>
      <FormControl id='form-control'>
        <FormGroup
          sx={{
            gap: theme.spacing(2),
            alignItems: 'center',
          }}
        >
          {addOnsData.map(addOn => (
            <StyledFormControlLabel
              key={addOn.name}
              isChecked={isAddOnSelected(addOn.name)}
              control={
                <Checkbox
                  disableRipple
                  checked={isAddOnSelected(addOn.name)}
                  onChange={e => handleChange(e, addOn)}
                  name={addOn.name}
                />
              }
              label={
                <StyledBox>
                  <Stack>
                    <Typography variant='body1'>{addOn.title}</Typography>
                    <Typography variant='caption'>
                      {addOn.description}
                    </Typography>
                  </Stack>
                  <Typography variant='body2'>{addOn.price}</Typography>
                </StyledBox>
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
};

export default AddOns;
