import { mergeClasses, makeStyles } from '@fluentui/react-make-styles';
import { useBadgeStyles } from '../../Badge';
import type { PresenceBadgeState } from './PresenceBadge.types';

const useStyles = makeStyles({
  root: theme => ({
    padding: 0,
    borderWidth: theme.global.strokeWidth.thick,
  }),
  thinBorder: theme => ({
    borderWidth: theme.global.strokeWidth.thin,
  }),
  statusBusy: theme => ({
    backgroundColor: theme.alias.color.red.background3,
    borderColor: theme.alias.color.red.background3,
  }),
  statusAway: theme => ({
    backgroundColor: theme.alias.color.marigold.background3,
    borderColor: theme.alias.color.marigold.background3,
  }),
  statusAvailable: theme => ({
    backgroundColor: theme.alias.color.lightGreen.foreground3,
    borderColor: theme.alias.color.lightGreen.foreground3,
  }),
  statusOffline: theme => ({
    backgroundColor: theme.alias.color.neutral.neutralBackground1,
    color: theme.alias.color.neutral.neutralForeground3,
    borderColor: theme.alias.color.neutral.neutralForeground3,
  }),
  statusOutOfOffice: theme => ({
    backgroundColor: theme.alias.color.neutral.neutralBackground1,
    color: theme.alias.color.berry.foreground3,
    borderColor: theme.alias.color.berry.foreground3,
  }),
  outOfOffice: theme => ({
    backgroundColor: theme.alias.color.neutral.neutralBackground1,
  }),
  outOfOfficeAvailable: theme => ({
    color: theme.alias.color.lightGreen.foreground3,
  }),
  outOfOfficeBusy: theme => ({
    color: theme.alias.color.red.background3,
  }),
  outOfOfficeAway: theme => ({
    color: theme.alias.color.marigold.background3,
  }),
});

/**
 * Applies style classnames to slots
 */
export const usePresenceBadgeStyles = (state: PresenceBadgeState): PresenceBadgeState => {
  const styles = useStyles();
  state.root.className = mergeClasses(
    styles.root,
    (state.status === 'busy' || state.status === 'doNotDisturb') && styles.statusBusy,
    state.status === 'away' && styles.statusAway,
    state.status === 'available' && styles.statusAvailable,
    state.status === 'offline' && styles.statusOffline,
    state.status === 'outOfOffice' && styles.statusOutOfOffice,
    state.outOfOffice && styles.outOfOffice,
    state.outOfOffice && state.status === 'available' && styles.outOfOfficeAvailable,
    state.outOfOffice && (state.status === 'busy' || state.status === 'doNotDisturb') && styles.outOfOfficeBusy,
    state.outOfOffice && state.status === 'away' && styles.outOfOfficeAway,
    (state.size === 'tiny' || state.size === 'extra-small') && styles.thinBorder,
    state.root.className,
  );

  return useBadgeStyles(state) as PresenceBadgeState;
};
