import { FC } from 'react';
import { useCurrencyStore } from '@/stores/currency';
import { useSettingsStore } from '@/stores/settings';
import { convertToLocalCurrency } from '@helpers/convert-to-local-currency';

type PriceProps = {
    value: number;
    isVirtual?: boolean;
    className?: string;
    discount?: number;
    originalPrice?: number;
};

type PriceTagProps = {
    price: number;
    currency: string;
    isVirtual: boolean;
    discount?: number;
    originalPrice?: number;
    className?: string;
};

type VariablePriceProps = {
    value: number;
};

const PriceTag: FC<PriceTagProps> = ({ price, isVirtual, discount, originalPrice, className }) => {
    const { settings } = useSettingsStore();

    let displayPrice = 'Free';
    let discountedPrice: string | null = null;

    const hasDiscountOrOriginalPrice = discount || originalPrice;
    const effectivePrice = originalPrice || price + (discount || 0);

    if (isVirtual) {
        displayPrice = `${price} ${settings?.virtual_currency}`;
    } else if (price > 0) {
        displayPrice = `$${price.toFixed(2)}`;
        discountedPrice = hasDiscountOrOriginalPrice ? `$${effectivePrice.toFixed(2)}` : null;
    }

    // Extract color classes from className
    const colorClass = className?.match(/(text-\w+-\d+)/)?.[0] || 'text-green-400';
    const baseClasses = className?.replace(/(text-\w+-\d+)/, '').trim() || '';

    return (
        <p className={baseClasses}>
            {discountedPrice && discountedPrice !== displayPrice ? (
                <>
                    <s className="text-red-400 line-through">{discountedPrice}</s>
                    <span className={colorClass}>{displayPrice}</span>
                </>
            ) : (
                <>
                    <span className={colorClass}>{displayPrice}</span>
                </>
            )}
        </p>
    );
};

export const Price: FC<PriceProps> = ({
    value,
    isVirtual = false,
    className,
    discount,
    originalPrice
}) => {
    const { currency } = useCurrencyStore();
    const localCurrencyName = currency?.name || '';
    const localPrice = convertToLocalCurrency(value);
    const localDiscount = discount ? convertToLocalCurrency(discount) : 0;
    const localOriginalPrice = originalPrice ? convertToLocalCurrency(originalPrice) : 0;

    return (
        <PriceTag
            originalPrice={localOriginalPrice}
            price={localPrice}
            currency={localCurrencyName}
            isVirtual={isVirtual}
            discount={localDiscount}
            className={className}
        />
    );
};

export const VariablePrice: FC<VariablePriceProps> = ({ value }) => {
    const { currency } = useCurrencyStore();
    const localCurrencyName = currency?.name || '';
    const localPrice = convertToLocalCurrency(value).toFixed(2);

    return (
        <span>
            {localPrice} {localCurrencyName}
        </span>
    );
};
