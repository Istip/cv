import { Anchor, Text, tokens } from '../UI';
import { CardContent, CardWrapper, CardYear } from './Card.styles';

const Card = ({ item }) => {
  return (
    <CardWrapper>
      <CardYear>
        <Text variant="medium12" color={tokens.colors.primaryDark1}>
          {item.year}
        </Text>
      </CardYear>

      <CardContent>
        <Text variant="medium16" color={tokens.colors.primaryDark2}>
          {item.title}
        </Text>
        <Text variant="regular14" color={tokens.colors.primaryDark2}>
          {item.subtitle}
        </Text>
        {item.place && (
          <i>
            <Text variant="regular14" color={tokens.colors.primaryLight1}>
              {item.place}
            </Text>
          </i>
        )}
        <br />

        <Text variant="medium12" color={tokens.colors.primaryDark2}>
          {item.accentTitle}
        </Text>

        <Text
          variant="regular12"
          lineHeight="1.5"
          color={tokens.colors.primaryDark2}
        >
          {item.content}
        </Text>

        <Anchor href={item.website} target="_blank" title={item.website}>
          Visit Website
        </Anchor>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
