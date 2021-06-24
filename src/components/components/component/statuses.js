import l10n from '../../../language'

const statuses = {
  operational: {
    name: "Operational",
    locName: l10n.components.operational,
    backgroundColour: "rgba(61, 167, 81, 0.1)",
  },
  performanceIssues: {
    name: "Performance Issues",
    locName: l10n.components.performanceIssues,
    backgroundColour: "rgba(73, 144, 226, 0.1)",
  },
  partialOutage: {
    name: "Partial Outage",
    locName: l10n.components.partialOutage,
    backgroundColour: "rgba(192, 138, 45, 0.1)",
  },
  majorOutage: {
    name: "Major Outage",
    locName: l10n.components.majorOutage,
    backgroundColour: "rgba(217, 68, 48, 0.1)",
  },
  maintenance: {
    name: "Maintenance",
    locName: l10n.components.maintenance,
    backgroundColour: "rgba(96, 96, 96, 0.1)",
  },
  unknown: {
    name: "Unknown",
    locName: l10n.components.unknown,
    backgroundColour: "rgba(177, 177, 177, 0.1)",
  },
};

export default statuses;
