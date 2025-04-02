import { Button } from "./button.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover.tsx";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./command.tsx";
import * as React from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "../../utils/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import './Combobox.scss';

export interface IComboboxOption {
  value: string;
  label: string | React.ReactElement;
  disabled?: boolean;
  group?: string;
}

interface IProps {
  options: IComboboxOption[];
  hasHeader?: boolean;
  placeholder?: string;
  title?: string;
  onChange?: (value: any) => void | undefined;
  className?: string;
  value?: string|string[];
  disabled?: boolean;
  canUnselect?: boolean;
  multiple?: boolean;
  selectedValueFormatter?: (curOption: any) => React.ReactElement|string;
}

const DiplaySelectedValues = ({selectedValues}: {selectedValues: IComboboxOption[]}) => {
  if(selectedValues.length > 2){
    return <span>{selectedValues.length} sélectionnés</span>
  }
  
  return <span>{selectedValues.map((value) => value.label).join(", ")}</span>
}

const Combobox = ({
  options,
  placeholder,
  title = "",
  onChange = undefined,
  hasHeader = true,
  className = "",
  value,
  disabled = false,
  canUnselect = true,
  multiple = false,
  selectedValueFormatter
}: IProps) => {
  const [open, setOpen] = React.useState(false);
  const [curValue, setCurValue] = React.useState<string[]>(value ? (multiple ? value as string[] : [value as string]) : []);

  const [width, setWidth] = useState(0);
  const buttonRef = useRef(null);

  React.useEffect(() => {
    setCurValue(value ? (multiple ? value as string[] : [value as string]) : []);
  }, [value]);

  useEffect(() => {
    if (buttonRef.current) {
      setWidth((buttonRef.current as any).offsetWidth);
    }
  }, [open]); 

  useEffect(() => {
    if (open && value) {
      setTimeout(() => {
        const selectedElement = document.querySelector(`[cmdk-item][data-value="${value}"]`);
        if (selectedElement) {
          selectedElement.scrollIntoView({ 
            behavior: 'auto',
            block: 'center'
          });
        }
      }, 50);
    }
  }, [open, value]);

  // We always return all selected options, because internally we manage an array even if not multiple
  const curOption: IComboboxOption[] = useMemo(() => {
    return options.filter((option) => curValue.includes(option.value)) ?? [];
  }, [curValue, options]);


  const handleSelect = (option: IComboboxOption) => {
    let newValue: string[] = [];
    
    if (multiple) {
      // If multiple, add or remove the value from the array
      if (curValue.includes(option.value)) {
        newValue = curValue.filter(val => val !== option.value);
      } else {
        newValue = [...curValue, option.value];
      }
    } else {
      // If not multiple, replace the value or empty
      newValue = curValue.includes(option.value) && canUnselect ? [] : [option.value];
    }
    
    if (newValue.length === 0 && !canUnselect) {
      return;
    }
    
    setCurValue(newValue);
    setOpen(multiple ? true : false); // Keep open if multiple
    
    // Call onChange with the adapted value (array or single string depending on multiple)
    if (onChange !== undefined) {
      onChange(multiple ? newValue : newValue[0] || "");
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={buttonRef}
          disabled={disabled}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] h-[30px] py-1 justify-between ${curValue && hasHeader ? "pb-0 pt-0" : ""} ${className}`}
        >
          <div className="h-full w-full relative text-ellipsis overflow-hidden">
            <span
              className="flex flex-col absolute left-0"
              style={{ top: hasHeader ? 0 : 3 }}
            >
              {curValue.length === 0 && placeholder ? (
                <span
                  className="text-xs text-left mt-1"
                  style={{ lineHeight: 1 }}
                >
                  {placeholder}
                </span>
              ) : (
                ""
              )}
              {curValue.length > 0 && hasHeader ? (
                <span className="text-xs text-left mt-1">{title}</span>
              ) : (
                ""
              )}
              {curValue.length > 0 ? (
                <span
                  style={{
                    lineHeight: hasHeader ? 0.9 : 1,
                    fontSize: hasHeader ? 13 : 14,
                  }}
                  className={"text-left " + (hasHeader ? "font-bold" : "")}
                >
                  {(curOption && curOption.length > 0 && selectedValueFormatter) ? selectedValueFormatter(multiple ? curOption : curOption[0]) : <DiplaySelectedValues selectedValues={curOption} />}
                </span>
              ) : (
                title
              )}
            </span>
          </div>
          <CaretSortIcon className="ml-2 h-5 w-5 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: `${width}px` }} className="p-0 max-h-[300px] overflow-y-auto">
        <Command
          filter={(value, search) => {
            const label = options.find(
              (option) => option.value === value,
            )?.label;
            if (
              typeof label === "string" &&
              label.toLowerCase().includes(search.toLowerCase())
            ) {
              return 1;
            }
            return 0;
          }}
        >
          <CommandEmpty>Aucun résultat.</CommandEmpty>
          {options.some(opt => opt.group) ? (
            Object.entries(
              options.reduce((acc, option) => {
                const group = option.group || 'default';
                if (!acc[group]) acc[group] = [];
                acc[group].push(option);
                return acc;
              }, {} as Record<string, typeof options>)
            ).map(([group, groupOptions]) => (
              <CommandGroup 
                key={group} 
                heading={group === 'default' ? undefined : group}
              >
                {groupOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    className={((curValue.includes(option.value)) ? "combobox-element-selected" : "") + (option.disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "")}
                    onSelect={() => handleSelect(option)}
                  >
                    {option.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        curValue.includes(option.value) ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))
          ) : (
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  className={((curValue.includes(option.value)) ? "combobox-element-selected" : "") + (option.disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "")}
                  onSelect={() => handleSelect(option)}
                >
                  {option.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      curValue.includes(option.value) ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const ComboboxOptions = (
  entities: any[],
  valueField: string,
  labelField: string,
  groupField?: string,
) => {
  return entities.map((e) => ({
    value: e[valueField],
    label: e[labelField],
    group: groupField ? e[groupField] : undefined,
  }));
};

export { Combobox, ComboboxOptions };