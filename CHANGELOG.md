# Changelog

All notable changes are being documented in this file.

Types of changes:

1. **Added** for new features.
1. **Changed** for changes in existing functionality.
1. **Deprecated** for soon-to-be removed features.
1. **Removed** for now removed features.
1. **Fixed** for any bug fixes.
1. **Security** in case of vulnerabilities.
1. **Breaking** for breaking changes
1. **Docs** for documentation changes
1. **Lab** components and features that are still in a work in progress

## Next
### Added
- `<NoBorderInput/>` - adding unidriver [#5612](https://github.com/wix/wix-style-react/pull/5612)

### Changed
- `<Autocomplete/>` emptyMessage proptype [#5609](https://github.com/wix/wix-style-react/pull/5609)
- `<InputArea/>` - Cancel debounced function on unmount and some other tweaks to reduce noise in tests [#5610](https://github.com/wix/wix-style-react/pull/5610)
- `<Breadcrumbs/>`- stylable migration [#5592](https://github.com/wix/wix-style-react/pull/5592)
- `<Notificaiton/>`- implementing `<Notification/>` with Animator to fix the component animation issue[#5603](https://github.com/wix/wix-style-react/pull/5603)

## 8.24.0 - 2020-06-25

### Changed
- `<Tabs/>`- migrating to stylable [#5557](https://github.com/wix/wix-style-react/pull/5557)

### Fixed
- `<Carousel/>`- adding paths to scss file [#5616](https://github.com/wix/wix-style-react/pull/5616)

## 8.24.0 - 2020-06-24

### Changed
- `<ModalPreviewLayout/>`- exposed `nextButtonProps` & `prevButtonProps` props [#5595](https://github.com/wix/wix-style-react/pull/5595)

### Fixed
- Fix dnd-styles import [#5598](https://github.com/wix/wix-style-react/pull/5598)
- `<Modal/>` - invoke onRequestClose only if passed as prop [#5600](https://github.com/wix/wix-style-react/pull/5600)
- `<Accordion/>` - changed hover color for with skin="light" when hideShadow is active [#5579](https://github.com/wix/wix-style-react/pull/5579)
- `<Box/>` - fix styles don't re-render with no value [#5599](https://github.com/wix/wix-style-react/pull/5599)

## 8.23.0 - 2020-06-22
### Internal
- `<EllipsisHOC/>` - migrate from wix-ui-core [#5586](https://github.com/wix/wix-style-react/pull/5586)
### Changed
- `<Loader/>` - Deleting legacy protructor driver since it was faulty, exposed the uni-driver instead and updated internal usages accordingly.

## 8.22.3 - 2020-06-22
### Fixed
- `<ListItemSelect/>`- fixing item height [#5555](https://github.com/wix/wix-style-react/pull/5555)
- `<Search/>` - Fix the bug that in some cases the clear button doesn't work. FYI after this fix if you use this component as a controlled component you must pass an onClear callback and update the value you send for the component in order to clear the input. [5576](https://github.com/wix/wix-style-react/pull/5576)
- `<RichTextArea/>`- update min height [#5512](https://github.com/wix/wix-style-react/pull/5512)
- `<ImageViewer/>`- fix the bug that it breaks in small sizes. [#5573](https://github.com/wix/wix-style-react/pull/5573)
- `<Input/>` - Change the clear button size according to the input size. [#5569](https://github.com/wix/wix-style-react/pull/5569)


## 8.22.1 - 2020-06-18
### Changed
- Rearranging the storybook menu to showcase the new `<AnnouncementModalLayout />` & `<CustomModalLayout />` under the `components` section. Cheatsheet & Design-Guidelines updated accordingly. [#5559](https://github.com/wix/wix-style-react/pull/5559)
- `<Accordion/>` - Adding `initiallyOpen` prop  `<AccordionItem/>` to clarify when will this value will be controlled vs uncontrolled. [#5582](https://github.com/wix/wix-style-react/pull/5582)

### Fixed
- `<CheckToggle/>` - fix css when box-sizing is set to border-box from outside [#5571](https://github.com/wix/wix-style-react/pull/5571)
- `<Accordion/>` - fix behavior to close an initially opened item when clicked [#5575](https://github.com/wix/wix-style-react/pull/5575)

## 8.22.0 - 2020-06-16
### Fixed
- `<InputArea/>` - counter not updated when value prop is changed [#5566](https://github.com/wix/wix-style-react/pull/5566)
- `<Card/>` - using classnames with stylable [#5570](https://github.com/wix/wix-style-react/pull/5570)

### Changed
- `<ColorPicker/>`- migrating to stylable [#5535](https://github.com/wix/wix-style-react/pull/5535)

## 8.21.0 - 2020-06-15
### Fixed
- `<Input/>` - fix prefix height [#5541](https://github.com/wix/wix-style-react/pull/5541)
- `<Accordion/>` - fix missing types [#5558](https://github.com/wix/wix-style-react/pull/5558)

### Added
- `<MessageModalLayout/>` & `<CustomModalLayout/>` - Added support for dynamic scrolling, content area will now have top/bottom dividiers emphasising the scroll position by default [#5519](https://github.com/wix/wix-style-react/pull/5519)
- `<CustomModalLayout/>` - Added the ability to show a static divider bellow the modal header [#5542](https://github.com/wix/wix-style-react/pull/5542)
- `<Notification/>`- Exposing ellipsis prop for `<Notification.TextLabel/>` [#5544](https://github.com/wix/wix-style-react/pull/5544)

### Changed
- `<Card/>`- stylable migration [#5543](https://github.com/wix/wix-style-react/pull/5543)
- `<Slider/>` - stylable migration [#5552](https://github.com/wix/wix-style-react/pull/5552)

## 8.20.0 - 2020-06-11
### Added
- `<Page/>` - support content horizontal scroll [#5497](https://github.com/wix/wix-style-react/pull/5497)

### Fixed
- `<AudioPlayer/>` - fix audio file can be played twice [#5533](https://github.com/wix/wix-style-react/pull/5533)

## 8.19.0 - 2020-06-10
**Due to dependency issues, this release reverts changes done in 8.18.0** [#5534](https://github.com/wix/wix-style-react/pull/5534)

## 8.18.0 - 2020-06-09
### Changed
- internal upgrade of Stylable from v1 to v3

### Added
- `<Notification/>` - exposing ellipsis prop to `<Notification.TextLabel/>` [#5508](https://github.com/wix/wix-style-react/pull/5508)

### Changed
- `<Card/>`- migrating styling to stylable [#5493](https://github.com/wix/wix-style-react/pull/5493)

## 8.17.0 - 2020-06-08
### Changed
- Set `react-modal` dependency to 3.10.1 [#5506](https://github.com/wix/wix-style-react/pull/5506)

### Docs
- `<Calendar/>` - Create a new story page [#5523](https://github.com/wix/wix-style-react/pull/5523)
- `<CalendarPanel/>` - Create a new story page [#5524](https://github.com/wix/wix-style-react/pull/5524)
- `<CalendarPanelFooter/>` - Create a new story page [#5525](https://github.com/wix/wix-style-react/pull/5525)

## 8.16.0 - 2020-06-07
### Fixed
- `<Search/>` - fix wrong width when size small [#5513](https://github.com/wix/wix-style-react/pull/5513)
- `<EllipsisHOC/>` - add children to dependencies [#5518](https://github.com/wix/wix-style-react/pull/5518)

### Changed
- `<Table/>` - replace puppeteer driver with uniDriver [#5517](https://github.com/wix/wix-style-react/pull/5517)

## 8.15.1 - 2020-06-03
### Fixed
- `<MessageModalLayout />` - fix missing export in index.d.ts
- `<AnnouncemenetModalLayout />` - fixing types in uni-driver [#5514](https://github.com/wix/wix-style-react/pull/5514)

## 8.15.0 - 2020-06-03
### Changed
- `<MessageModalLayout />`, `<CustomModalLayout />`, `<AnnouncemenetModalLayout />` - All new modal layouts were refactored according to accomodate the new UX requirements ([DSM-538](https://jira.wixpress.com/browse/DSM-534)), [#5509](https://github.com/wix/wix-style-react/pull/5496)

### Fixed
- `<Carousel/>` - Fix indicators color and margin-top [#5431](https://github.com/wix/wix-style-react/pull/5431)

## 8.14.0 - 2020-06-02
### Added
- `<MultiSelectCheckbox/>` - Expose prefix, suffix, and ellipsis [#5509](https://github.com/wix/wix-style-react/pull/5509)
- `<Accordion/>` - Add hideShadow prop [#5502](https://github.com/wix/wix-style-react/pull/)

### Fixed
- `<InputWithOptions/>` - fix use of excludeClass prop [#5499](https://github.com/wix/wix-style-react/pull/5499)

### Removed
- `<Dropdown/>` - remove withArrow prop [#5507](https://github.com/wix/wix-style-react/pull/5507)

## 8.13.1 - 2020-05-26
### Fixed:
- `<FontUpgrade/>` - Fix Modal/Popover/Tooltip content [#5498](https://github.com/wix/wix-style-react/pull/5498)
- `<GooglePreview/>`- Use hard codded arial font [#5469](https://github.com/wix/wix-style-react/pull/5469)

## 8.13.0 - 2020-05-24
### Fixed:
- `<Notification/>`- driver fix [#5491](https://github.com/wix/wix-style-react/pull/5491)

### Breaking
- `<AudioPlayer>` - Renamed prop `html5Audio` to `webAudioAPI` which makes the player to be html5 by default [#5488](https://github.com/wix/wix-style-react/pull/5488)
- `<AudioPlayer>` - Changed prop `lazyLoad` (boolean) to be `preload` ('auto', 'metadata' or 'none') defaults to 'metadata'. (lazyLoad=false equals to prelaod=auto) [#5488](https://github.com/wix/wix-style-react/pull/5488)

## 8.12.0 - 2020-05-21

### Added
- `<RadioGroup/>` - Added UniDrivers to `RadioGroup` and `RadioButton`, fixed a bug in the existing `RadioButton` driver that prevented it from returing correct values. [#5459](https://github.com/wix/wix-style-react/pull/5459)
- `<Notification/>` - adding icons to notification and adding visual tests [#5481](https://github.com/wix/wix-style-react/pull/5481)

### Fixed
- `<ModalPreviewLayout/>` - Fix props types [#5482](https://github.com/wix/wix-style-react/pull/5482)
- infra: fix broken puppeteer testkit that can't be required in node [#5487](https://github.com/wix/wix-style-react/pull/5487)

### Changed
- `Input` & `Selection` families- changing large size [#5457](https://github.com/wix/wix-style-react/pull/5457)
- `<Notification/>`- migrating styles to stylable and updating drivers accordingly [#5484](https://github.com/wix/wix-style-react/pull/5484)

## 8.11.0 - 2020-05-19
### Added
- `<SortableGrid/>` - new component [#5467](https://github.com/wix/wix-style-react/pull/5467)

### Fixed
- `<Popover/>` - wrap content with `<FontUpgrade/>` [#5479](https://github.com/wix/wix-style-react/pull/5479)
- `<SectionHelper/>` - fix close button position in without a title [#5475](https://github.com/wix/wix-style-react/pull/5475)

## 8.10.0 - 2020-05-17

### Fixed
- `<TimeInput/>`- fix component methods not to be public methods & display name [#5462](https://github.com/wix/wix-style-react/pull/5462)
- `<Breadcrumbs/>`- fix item max width [#5464](https://github.com/wix/wix-style-react/pull/5464)
- `<Table/>`- Adding sticky `<TableActionCell/>` support for a table with horizontal scroll [#5432](https://github.com/wix/wix-style-react/pull/5432)

## 8.9.0 - 2020-05-14
### Added
- `<Page.Header/>` - breadcrumbs prop can now be a function [#5461](https://github.com/wix/wix-style-react/pull/5461)

### Fixed
- `<GoogleAddressInput/>` - remove accidentally added menu arrow [#5447](https://github.com/wix/wix-style-react/pull/5447)
- `<InputWithOptions/>` - Fix click outside when inside a `<Popover/>` [#5456](https://github.com/wix/wix-style-react/pull/5456)


## 8.8.1 - 2020-05-11
### Fixed
- `<AudioPlayer/>` - fix onLoadError callback [#5449](https://github.com/wix/wix-style-react/pull/5449)
- `<AudioPlayer/>` - fix JSDOM tests by consuming howler directly from [#5450](https://github.com/wix/wix-style-react/pull/5450)

## 8.8.0 - 2020-05-08
### Added
- `<AudioPlayer/>` - new component [#5419](https://github.com/wix/wix-style-react/pull/5419)

### Fixed
- `<Notification/>` - added DEFAULT_TIMEOUT to type [#5443](https://github.com/wix/wix-style-react/pull/5443)
- `Madefor` - Fix Heading font-family definition [#5444](https://github.com/wix/wix-style-react/pull/5444)
- `<InputArea/>` - fix autoGrow on mount [#5446](https://github.com/wix/wix-style-react/pull/5446)

## 8.7.0 - 2020-05-06
### Added
- `<ComposerSidebar/>` - New component [#5426](https://github.com/wix/wix-style-react/pull/5426)

### Fixed
- `<Accordion/>`- fix open property of AccordionItems to update dynamically [#5411](https://github.com/wix/wix-style-react/pull/5411)

## 8.6.1 - 2020-05-01
- `<ToggleButton/>` - fixed stylable warning [#5428](https://github.com/wix/wix-style-react/pull/5428)

## 8.6.0 - 2020-04-30

### Added
- `<ToggleButton/>` - Added `shape` & `border` props [#5400](https://github.com/wix/wix-style-react/pull/5400)
- `<Table/>` - Sticky columns and horizontal scroll support [#5405](https://github.com/wix/wix-style-react/pull/5405)
- `<ModalSelectorLayout/>` - Add UniDriver [#5420](https://github.com/wix/wix-style-react/pull/5420)
- `<BadgeSelect/>` - expose popoverCommonProps [#5333](https://github.com/wix/wix-style-react/pull/5333)
- `<BadgeSelect/>` - Fix drivers when popover appendTo=window [#5424](https://github.com/wix/wix-style-react/pull/5333)

### Fixed
- `<Slider/>`- fixed global styles override [#5418](https://github.com/wix/wix-style-react/pull/5418)
- `<ComposerHeader/>` - added missing types [#5421](https://github.com/wix/wix-style-react/pull/5421)
- `<Timeline/>` - fix driver types - missing index [#5422](https://github.com/wix/wix-style-react/pull/5422)

## 8.5.0 - 2020-04-28

### Added
- `<TimeInput/>` - custom suffix - [#5408](https://github.com/wix/wix-style-react/pull/5408)
- `<Timeline/>` - create new component [#5387](https://github.com/wix/wix-style-react/pull/5387)

### Fixed
- Infra: use latest `babel-plugin-dynamic-import-node` [#5398](https://github.com/wix/wix-style-react/pull/5398)
- `<ListItemSelect/>`- fix selected checkbox css [#5391](https://github.com/wix/wix-style-react/pull/5391)
- `<Tooltip/>` - now works when wrapped with `<FontUpgrade/>` when appended to window [#5403](https://github.com/wix/wix-style-react/pull/5403)
- `<Modal/>` - now works when wrapped with `<FontUpgrade/>` [#5403](https://github.com/wix/wix-style-react/pull/5403)
- `<MultiSelectCheckbox/>`- replaced list item with `<ListItemSelect/>` [#4890](https://github.com/wix/wix-style-react/pull/4890)
- `<FontUpgrade/>`- Using React context to apply `FontUpgrade` to multiple components instead of "global variable" [#5406](https://github.com/wix/wix-style-react/pull/5406)

## 8.4.0 - 2020-04-22

### Added
- `<ListItemEditable/>` - new component [#5348](https://github.com/wix/wix-style-react/pull/5348)
- `<Popover/>` - adding exit animation [#5363](https://github.com/wix/wix-style-react/pull/5363)
- `<FloatingHelper/>`- adding exit animation [#5364](https://github.com/wix/wix-style-react/pull/5364)
- `<PopoverMenu/>`&& `<DropdownBase/>`- adding exit animation to `<PopoverMenu/>` by adding `animate` prop to `<DropdownBase/>` [#5365](https://github.com/wix/wix-style-react/pull/5365)
- `<Tooltip/>`- adding exit animation [#5368](https://github.com/wix/wix-style-react/pull/5368)
- `<Avatar>` - add loading state [#5369](https://github.com/wix/wix-style-react/pull/5369)

### Fixed
- `<AutoCompleteWithLabel/>` - fix hasError in testkit [#5370](https://github.com/wix/wix-style-react/pull/5370)
- `<ModalSelectorLayout/>` - add ok&cancel buttons functions to driver's types [#5373](https://github.com/wix/wix-style-react/pull/5373)
- `<PopoverMenu.MenuItem/>` - fix type for `text` prop [#5360](https://github.com/wix/wix-style-react/pull/5360)
- `<AddItem/>` & `<FillButton/>` - Restore `tooltipContent` prop [#5371](https://github.com/wix/wix-style-react/pull/5371)

### Docs
- `Icons` - improving icons story. [#5361](https://github.com/wix/wix-style-react/pull/5361)
- Design story - 1.1 Colors [#5187](https://github.com/wix/wix-style-react/pull/5187)



## 8.3.0 - 2020-04-16

### Added
- `<CheckToggle/>` -  new component [#5334](https://github.com/wix/wix-style-react/pull/5334)

### Fixed
- `<Input/>` - out of date README.TESTKIT.md removed [#5352](https://github.com/wix/wix-style-react/pull/5352)
- `<Page.Sticky/>` - add missing `propType` and type for `style` prop [#5356](https://github.com/wix/wix-style-react/pull/5356)
- set a fixed version of react-day-picker@7.4.1 due to breaking chang in the import API

## 8.2.0 - 2020-04-15

### Added
- `<Sidebar/>`- Add shadow to sidebar for scrolling indication [#5297](https://github.com/wix/wix-style-react/pull/5297)
- `<TextButton/>` - support fluid functionality [#5349](https://github.com/wix/wix-style-react/pull/5349)
- `<DropdownBase/>` - support fluid functionality [#5349](https://github.com/wix/wix-style-react/pull/5349)

### Fixed
- `<Pagination />`  - correctly render empty nav buttons [#5345](https://github.com/wix/wix-style-react/pull/5345)

## 8.1.0 - 2020-04-13

### Fixed

- Aligned status indication API across all input family components [#5339](https://github.com/wix/wix-style-react/pull/5339)
- `<Button/>` - fix uni.driver type [#5341](https://github.com/wix/wix-style-react/pull/5341)

### Added

- `<Avatar/>` - support single letter in size 24 [#5332](https://github.com/wix/wix-style-react/pull/5332)

## 8.0.0 - 2020-04-07

This is only a *brief* list of changes, for the *full* list of changes see the [migration guide](MIGRATION.md)<br>.
For changelog of version 7 [see here](CHANGELOG-V7.md)

### Deleted

- `<AutoCompleteComposite/>`
- `<DateInput/>`
- `<FieldWithSelectionComposite/>`
- `<FullTextView/>`
- `<GoogleAddressInputWithLabel/>`
- `<HBox/>`
- `<InputAreaWithLabelComposite/>`
- `<Label/>`
- `<MultiSelectComposite/>`
- `<SideMenu/>`
- `<SideMenuDrill/>`
- `<SlideAnimation/>`
- `<StatsWidget/>`
- `<TextLink/>`
- `<VBox/>`

### Changed

#### `<AddItem/>`
Props:
- removed `tooltipAppendTo`
- removed `tooltipContent`
- removed `tooltipPlacement`
- removed `tooltipFixed`
- removed `tooltipFlip`

#### `<Avatar/>`

Props:
- changed `color` - only values

#### `<AutoComplete/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`

#### `<BarChart/>`

Props:
- removed `deprecatedColors`

#### `<Card/>`

Props:
- removed `withoutDivider`

#### `<CircularProgressBar/>`

Props:
- removed `shouldLoadAsync`

Testkit:
- changed `getTooltipErrorMessage` in driver (not uni) returns a `string` instead of `Promise<string>`
- removed `getTooltip`
- removed `isTooltipShown`

#### `<ColorInput/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`

Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`
- removed `hasError`

#### `<DataTable/>`

This component is _internal_ and should not be used directly - use `<Table/>` instead

#### `<DatePicker/>`

Props:
- removed `isOpen`
- removed `error` & `errorMessage`

#### `<Dropdown/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`


#### `<DropdownLayout/>`

Props:
- removed `theme`

Testkit:
- removed `hasTheme`

#### `<FillButton/>`

Props:
- removed `tooltipContent`

#### `<FormField/>`

Testkit:
- (protractor) removed `getTooltipInfoValue`

#### `<GoogleAddressInput/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`

#### `<ImageViewer/>`

Props:
- removed `tooltipPlacement`
- removed `error` & `errorMessage`

Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`
- removed `isErrorVisible`
- removed `getErrorTooltipContent`

#### `<Input/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`
- removed sub component `<Input.Units/>`
- removed `magnifyingGlass`
- removed `updateControlledOnClear`

Testkit:
- removed `hasHelp`
- removed `clickUnit`
- removed `getUnit`
- removed `hasMagnifyingGlass`
- removed `clickMagnifyingGlass`
- removed `hasExclamation`
- removed `isNarrowError`

#### `<InputArea/>`

Props:
- removed `onTooltipShow`
- removed `error` & `errorMessage`

Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`
- removed `hasError`
- removed `hasWarning`
- removed `getTooltipDataHook`
- removed `getTooltipElement`
- removed `isErrorMessageShown`
- removed `mouseEnterErrorIndicator`
- removed `getErrorMessage`
- removed `getWarningMessage`

#### `<InputWithOptions/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`
- removed `disableClickOutsideWhenClosed`

#### `<LinearProgressBar/>`

Props:
- removed `shouldLoadAsync`

Testkit:
- changed `getTooltipErrorMessage` in driver (not uni) returns a `string` instead of a `Promise<string>`
- removed `getTooltip`
- removed `isTooltipShown`

#### `<Loader/>`

Props:
- removed `shouldLoadAsync`

#### `<MultiSelect/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`

Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`
- removed `inputWrapperHasError`

#### `<MultiSelectCheckbox/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`

#### `<NoBorderInput/>`

Props:
- removed `error` & `errorMessage`


Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`

#### `<NumberInput/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`


Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`

#### `<Page/>`

Props:
- removed `upgrade`

#### `<Popover/>`

Props:
- removed `disableClickOutsideWhenClosed`

#### `<PopoverMenu/>`
changed to next

#### `<RadioGroup/>`

Props:
- removed `type`

Testkit:
- removed `isButtonType`

#### `<RichTextInputArea/>`

Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`
- removed `hasError`
- removed `getErrorMessage`

#### `<Search/>`

Props:
- removed `theme`
- removed `error` & `errorMessage`
- removed `help` & `helpMessage`


Testkit:
- added `hasStatus`
- added `getStatus`
- added `hasStatusMessage`
- added `getStatusMessage`

#### `<StatisticsWidget/>`

Props:
- removed `statistics`

#### `<Table/>`

Testkit:
- removed `clickRowChecbox` - removed due to typo, use `clickRowCheckbox` instead

#### `<TableActionCell/>`
Props:
- removed `upgrade`
- changed `primaryAction.theme` to `primaryAction.skin` (with new values)

#### `<Tag/>`

Props:
- removed `wrap`

#### `<Tooltip/>`

Props:
- removed `upgrade`
