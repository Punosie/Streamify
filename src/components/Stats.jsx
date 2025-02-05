import { Badge, Stat, HStack } from "@chakra-ui/react";
import { InfoTip } from "@/components/ui/toggle-tip";

const formatValue = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`; // Format for millions
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`; // Format for thousands
  }
  return value; // Return as is if less than 1000
};

const Stats = ({ label, value, info, indicator }) => {
  const formattedValue = formatValue(value);
  const formattedIndicator = formatValue(indicator);

  return (
    <Stat.Root maxW="240px" borderWidth="1px" radius="md" p={5} width="100%">
      <Stat.Label whiteSpace="nowrap">
        {label}
        <InfoTip>{info}</InfoTip>
      </Stat.Label>
      <HStack>
        <Stat.ValueText>{formattedValue}</Stat.ValueText>
        <Badge colorPalette="green" gap="0" variant="outline">
          <Stat.UpIndicator />
          {formattedIndicator}
        </Badge>
      </HStack>
      <Stat.HelpText>since last month</Stat.HelpText>
    </Stat.Root>
  );
};

export default Stats;
